import React, { useState } from 'react'
import NatureImg from '../assets/nature_img.jpg'
import CategoryButton from './CategoryButton';
import ArrowIcon from '../assets/Arrow.svg'


const BlogCart = ({name, date, announcement, description, img, categories = []}) => {

  return (
    <div className="flex flex-col gap-4 w-[480px]">
      <img src={img} className="w-full h-[328px] rounded-xl" />
      <p className="text-[16px] font-medium">{name}</p>
      <p className="font-small text-[#85858D]">{date}</p>
      <h1 className="font-bold text-[20px] leading-[28px]">{announcement}</h1>
      <div className="flex gap-3">
        {categories.map((category) => (
          <CategoryButton
            text={category.title}
            bgColor={category.background_color}
            textColor={category.text_color}
          />
        ))}
      </div>
      <p className="text-[#404049] text-[16px] leading-[28px]">{description}</p>
      <p className="text-[#5D37F3] flex items-center gap-2">
        სრულად ნახვა
        <img src={ArrowIcon} />
      </p>
    </div>
  );
}

export default BlogCart