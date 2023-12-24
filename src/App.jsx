import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Blog from './pages/blog/Blog';
import CreateBlog from './pages/blog/CreateBlog';
import NotFound from './pages/notFound/NotFound';
import { useGlobalContext } from './context/Context';
import { AnimatePresence } from 'framer-motion';


function App() {
  const {isLogged} = useGlobalContext()

  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            {isLogged === "isLogged" ? (
              <Route path="/create-blog" element={<CreateBlog />} />
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
