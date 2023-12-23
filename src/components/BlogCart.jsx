import React from "react";
import ArrowIcon from "../assets/Arrow.svg";
import { Link } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import HorizontalScroll from "./HorizontalScroll";

const BlogCart = ({
  name,
  date,
  announcement,
  description,
  img,
  categories = [],
  id,
}) => {
  return (
    <div className="flex flex-col gap-4 w-[480px]">
      <Link to={`/blog/${id}`}>
        <img src={img} className="w-full h-[328px] rounded-xl" alt={name} />
      </Link>
      <p className="text-[16px] font-medium">{name}</p>
      <p className="font-small text-[#85858D]">{date}</p>
      <h1 className="font-bold text-[20px] leading-[28px]">{announcement}</h1>
      <HorizontalScroll className="flex gap-3 overflow-hidden">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            text={category.title}
            bgColor={category.background_color}
            textColor={category.text_color}
          />
        ))}
      </HorizontalScroll>
      <p className="text-[#404049] text-[16px] leading-[28px] overflow-hidden line-clamp-3 h-[84px]">
        {description}
      </p>
      <Link
        className="text-[#5D37F3] flex items-center gap-2"
        to={`/blog/${id}`}
      >
        სრულად ნახვა
        <img src={ArrowIcon} alt="Arrow" />
      </Link>
    </div>
  );
};

export default BlogCart;
