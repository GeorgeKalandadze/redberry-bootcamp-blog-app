import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
