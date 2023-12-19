import React, { useState } from 'react'
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

const Blog = () => {
    const [swiper, setSwiper] = useState(null); // State to store Swiper instance
    const [currentIndex, setCurrentIndex] = useState(0);
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

    const handleSlideChange = (swiper) => {
      setCurrentIndex(swiper.activeIndex);
    };

    console.log(currentIndex);

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

  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#F3F2FA] flex flex-col gap-12">
      <Header />
      <div className="flex px-24 py-8">
        <button
          className={`bg-[#FFFFFF] h-[44px] w-[44px] rounded-full flex items-center justify-center`}
          onClick={goToPrevSlide}
        >
          <img src={ArrowIcon2} />
        </button>
        <div className="w-full justify-center flex ">
          <div className="w-[720px] flex flex-col gap-4">
            <img src={NatureImg} className="w-full rounded-xl h-[328px]" />
            <p className="text-[16px] font-medium">ლილე კვარაცხელია</p>
            <p className="font-small text-[#85858D]">
              02.11.2023 • lile.kvaratskhelia@redberry.ge
            </p>
            <h1 className="font-bold text-[30px] leading-[45px]">
              მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
            </h1>
            <div className="flex gap-3 flex-wrap">
              <CategoryButton
                text={"კვლევა"}
                bgColor={"#E9EFE9"}
                textColor={"#60BE16"}
              />
              <CategoryButton
                text={"ხელოვნური ინტელექტი"}
                bgColor={"#EEE1F7"}
                textColor={"#B71FDD"}
              />
              <CategoryButton
                text={"UI/UX"}
                bgColor={"#FA575714"}
                textColor={"#DC2828"}
              />
              <CategoryButton
                text={"ხელოვნური ინტელექტი"}
                bgColor={"#EEE1F7"}
                textColor={"#B71FDD"}
              />
              <CategoryButton
                text={"UI/UX"}
                bgColor={"#FA575714"}
                textColor={"#DC2828"}
              />
              <CategoryButton
                text={"ხელოვნური ინტელექტი"}
                bgColor={"#EEE1F7"}
                textColor={"#B71FDD"}
              />
            </div>
            <p className="text-[#404049] text-[16px] leading-[28px]">
              6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
              სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
              მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
              ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
              ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა
              თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
              გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
              სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
              შეაჯიბრონ ერთმანეთს. აქვე საგულისხმოა, რომ როგორც ბერნის
              მეცნიერები განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის
              გაუმჯობესებული წარმოება, არამედ კულტურული საკითხები დაედო. მათი
              თქმით, ადამიანებს უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ
              ორის კავშირის დანახვა. 6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც
              დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და
              ორივეჯერ იმ ყველს მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს
              ასმენინებდნენ. „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში
              რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების უნივერსიტეტის
              წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა უნდა, ეს ერთი კვლევა
              საკმარისი არ არის საბოლოო დასკვნების გამოსატანად. სანაცვლოდ,
              მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა
              მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს.
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
                currentIndex === 0 ? "#AABBCC" : "#E4E3EB"
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
                currentIndex === carouselItems.length - 1
                  ? "#AABBCC"
                  : "#5D37F3"
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
            style={{ justifyContent: "space-between", width:"100%" }} 
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={item.title}>
                <div className="flex justify-center">
                  {" "}
                  {/* Adjust alignment */}
                  <BlogCart {...item} />
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