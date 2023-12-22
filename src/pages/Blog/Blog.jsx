import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import NatureImg from "../../assets/nature_img.jpg";
import CategoryButton from '../../components/CategoryButton';
import ArrowIcon from '../../assets/Arrow-2.svg'
import ArrowIcon2 from '../../assets/Arrow-3.svg'
import BlogCart from '../../components/BlogCart';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../../context/Context';
import axiosClient from '../../config/axiosClient';

const Blog = () => {
    const [swiper, setSwiper] = useState(null);
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    const {blogs} = useGlobalContext();

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axiosClient.get(`/blogs/${id}`);
           console.log(response.data);
           setBlog(response.data);
         } catch (error) {
           console.error("Error fetching data: ", error);
         }
       };

       fetchData();
     }, [id]);

    const goToNextSlide = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };

    const goToPrevSlide = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };




    const carouselItems = [
      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },
      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },
      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },
      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },

      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },
      {
        name: "Item 1",
        date: "Date 1",
        announcement: "Announcement 1",
        description: "Description 1",
        img: NatureImg,
      },
    ];

      const [filteredBlogs, setFilteredBlogs] = useState([]);

      useEffect(() => {
        if (blog.categories && blog.categories.length > 0) {
          const filtered = blogs.filter(
            (item) =>
              item.id !== blog.id &&
              item.categories.some((blogCat) =>
                blog.categories.some(
                  (selectedCat) => blogCat.id === selectedCat.id
                )
              )
          );
          setFilteredBlogs(filtered);
        }
      }, [blog.categories, blog.id, blogs]);

      console.log("all blogs",blogs)
      console.log("single blog",blog)



  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#F3F2FA] flex flex-col gap-12">
      <Header />
      <div className="flex px-24 py-8">
        <Link to="/">
          <button
            className={`bg-[#FFFFFF] h-[44px] w-[44px] rounded-full flex items-center justify-center`}
          >
            <img src={ArrowIcon2} />
          </button>
        </Link>
        <div className="w-full justify-center flex ">
          <div className="w-[820px] flex flex-col gap-4">
            <img src={blog.image} className="w-full rounded-xl h-[328px]" />
            <p className="text-[16px] font-medium">{blog.author}</p>
            <p className="font-small text-[#85858D]">
              {blog.publish_date} • {blog?.email}
            </p>
            <h1 className="font-bold text-[30px] leading-[45px]">
              {blog.title}
            </h1>
            <div className="flex gap-3 flex-wrap">
              {blog && blog.categories
                ? blog.categories.map((category) => (
                    <CategoryButton
                      key={category.id} // Remember to provide a unique key when using map in React
                      text={category.title}
                      bgColor={category.background_color}
                      textColor={category.text_color}
                    />
                  ))
                : null}
            </div>
            <p className="text-[#404049] text-[16px] leading-[28px]">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full">
        <div className="flex justify-between items-center px-24 py-8">
          <h1 className="font-bold text-[30px] leading-[45px]">
            მსგავსი სტატიები
          </h1>
          <div className="flex gap-4">
            <button
              className={`bg-[${
                isBeginning ? "#AABBCC" : "#E4E3EB"
              }] h-[44px] w-[44px] rounded-full flex items-center justify-center`}
              onClick={goToPrevSlide}
            >
              <img
                src={ArrowIcon}
                className="transform rotate-180"
                alt="Previous"
              />
            </button>
            <button
              className={`bg-[${
                isEnd ? "#AABBCC" : "#5D37F3"
              }] h-[44px] w-[44px] rounded-full flex items-center justify-center`}
              onClick={goToNextSlide}
            >
              <img src={ArrowIcon} alt="Next" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            onSwiper={(swiper) => setSwiper(swiper)}
            pagination={{ clickable: true }}
            modules={[FreeMode]}
            className="w-full mt-8"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            {filteredBlogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                <div className="flex justify-center">
                  {" "}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Blog