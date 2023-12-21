import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Blog from './pages/Blog/Blog';
import CreateBlog from './pages/blog/CreateBlog';
import NotFound from './pages/notFound/NotFound';
import { useGlobalContext } from './context/Context';


function App() {
  const {isLogged} = useGlobalContext()

  return (
    <>
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
    </>
  );
}

export default App
