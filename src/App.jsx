import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Blog from './pages/Blog/Blog';
import CreateBlog from './pages/blog/CreateBlog';


function App() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.blog.redberryinternship.ge/api/categories"
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData(); 
  // }, []); 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
