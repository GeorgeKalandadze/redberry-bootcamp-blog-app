import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header';
import HomeImg from '../../assets/Blog-1024x355 1.png'
import CategoryButton from '../../components/CategoryButton';
import BlogCart from '../../components/BlogCart';
import Modal from '../../components/Modal';
import axios from 'axios';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import ErrorIcon from '../../assets/error.png'
import SuccessIcon from '../../assets/success.png'
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useGlobalContext } from '../../context/Context';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import GuestLayout from '../../layouts/GuestLayout';
import HorizontalScroll from '../../components/HorizontalScroll';



const Home = () => {
  
  const [showModal, setShowModal] = useState(false);
  const { categories, isLogged, setIsLogged, blogs, animations } =
    useGlobalContext();

  const loginUser = async (email) => {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer${"282c0587589f7516edf61b215c828ba8047b67aabbe141c5d17ec45c0d624fd0"}`,
          },
        }
      );
      console.log("Login successful:", response);

      if (response.status === 204) {
        setIsLogged("isLogged")
      } else {
        setError("invalid");
        setIsLogged("isNotLogged");
      }

      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response);
      setIsLogged("isNotLogged");
    }
  };



  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const isPublished = (publishDate) => {
    const timestamp1 = new Date().getTime();
    const timestamp2 = new Date(publishDate).getTime();

    if(timestamp2 > timestamp1){
      return true
    }else{
      return false
    }
  }



  const [selectedCategories, setSelectedCategories] = useSessionStorage("categories",[]);

  const toggleCategorySelection = (categoryId) => {
    const index = selectedCategories.indexOf(categoryId);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const updatedCategories = [...selectedCategories];
      updatedCategories.splice(index, 1); 
      setSelectedCategories(updatedCategories);
    }
  };

  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
  if (selectedCategories.length === 0) {
    setFilteredBlogs(blogs);
  } else {
    const filtered = blogs.filter((blog) =>
      selectedCategories.some((selectedCat) =>
        blog.categories.some((blogCat) => blogCat.id === selectedCat)
      )
    );
    setFilteredBlogs(filtered);
  }
}, [selectedCategories, blogs]);




const scrollContainerRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [showScrollIndicator, setShowScrollIndicator] = useState(false);
const [startX, setStartX] = useState(null);
const [scrollLeft, setScrollLeft] = useState(0);

const handleScrollStart = (e) => {
  setIsDragging(true);
  setShowScrollIndicator(true);
  setStartX(e.pageX || e.touches[0].pageX);
  setScrollLeft(scrollContainerRef.current.scrollLeft);
};

const handleScrollMove = (e) => {
  if (isDragging && startX !== null) {
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }
};

const handleScrollEnd = () => {
  setIsDragging(false);
  setShowScrollIndicator(false);
  setStartX(null);
};

  return (
    <GuestLayout>
      <div className="flex px-24 py-8 justify-between items-center">
        <h1 className="text-[74px] font-bold">ბლოგი</h1>
        <img src={HomeImg} className="w-[624px] h-[350px]" />
      </div>
      <div className="px-24 py-8  flex justify-center ">
        <HorizontalScroll className="w-[680px] flex gap-10 horizontal-scroll overflow-hidden">
         
            {categories.map((option) => (
              <div
                key={option.id}
                className={`scroll-item ${
                  selectedCategories.includes(option.id)
                    ? "border-[2px] border-black"
                    : ""
                } flex-none`}
                style={{ borderRadius: "30px" }}
                onClick={() => {
                  toggleCategorySelection(option.id);
                }}
              >
                <CategoryButton
                  text={option.title}
                  bgColor={option.background_color}
                  textColor={option.text_color}
                />
              </div>
            ))}
          
        </HorizontalScroll>
      </div>

      <div className="px-24 py-8 flex justify-between flex-wrap gap-y-12">
        {filteredBlogs
          .filter((blog) => !isPublished(blog.publish_date))
          .map((blog) => (
            <BlogCart
              key={blog.id}
              name={blog.author}
              date={blog.publish_date}
              img={blog.image}
              announcement={blog.title}
              description={blog.description}
              categories={blog.categories}
              id={blog.id}
            />
          ))}
      </div>
    </GuestLayout>
  );
}

export default Home