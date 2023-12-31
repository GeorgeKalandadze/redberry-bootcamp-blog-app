import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog"
import Home from "./pages/home/Home";
import NotFound from './pages/notFound/NotFound';
import { useGlobalContext } from './context/Context';
import { AnimatePresence } from 'framer-motion';
import CreateBlog from './pages/createBlog/CreateBlog';


function App() {
  const {isLogged} = useGlobalContext()

  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog/:id" element={<Blog/>} />
            {isLogged === "isLogged" ? (
              <Route path="/create-blog" element={<CreateBlog/>} />
            ) : (
              <Route path="/create-blog" element={<NotFound/>} />
            )}
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App
