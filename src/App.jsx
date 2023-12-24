import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from './pages/notFound/NotFound.jsx';
import { useGlobalContext } from './context/Context';
import { AnimatePresence } from 'framer-motion';
import CreateBlog from './pages/createBlog/CreateBlog.jsx';


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
              <Route path="/create-blog" element={<NotFound />} />
            )}
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App
