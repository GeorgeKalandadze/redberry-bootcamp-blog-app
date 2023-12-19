import React from 'react'
import NatureImg from '../assets/nature_img.jpg'
import CategoryButton from './CategoryButton';
import ArrowIcon from '../assets/Arrow.svg'


const BlogCart = () => {
  return (
    <div className="flex flex-col gap-4 w-[408px]">
      <img src={NatureImg} className="w-full h-[328px] rounded-xl" />
      <p className="text-[16px] font-medium">ლილე კვარაცხელია</p>
      <p className="font-small text-[#85858D]">02.11.2023</p>
      <h1 className="font-bold text-[20px] leading-[28px]">
        EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
      </h1>
      <div className="flex gap-3">
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
      </div>
      <p className="text-[#404049] text-[16px] leading-[28px]">
        6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
        სიზუსტისთვის, ეს პროცესი...
      </p>
      <p className="text-[#5D37F3] flex items-center gap-2">
        სრულად ნახვა
        <img src={ArrowIcon} />
      </p>
    </div>
  );
}

export default BlogCart