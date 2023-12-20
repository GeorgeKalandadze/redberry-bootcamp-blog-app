import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../assets/Vector.png";
import CategoryButton from "./CategoryButton";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

const MultiSelectDropdown = ({
  label,
  options,
  value,
  className = "",
  handleChange,
  isValid,
}) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { info, setStore } = useGlobalContext();
  const [selectedOptions, setSelectedOptions] = useState(info.categories || []);
  const [newCategories, setNewCategories] = useState(info.categories);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.blog.redberryinternship.ge/api/categories"
        );
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    if (handleChange) {
      handleChange(option);
    }
    setIsOpen(false);
  };

  const dropdownStyles = {
    maxHeight: isOpen ? "200px" : "0",
    opacity: isOpen ? 1 : 0,
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
  };

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setStore((prevInfo) => ({
        ...prevInfo,
        categories: [...prevInfo.categories, option],
      }));
    }
  };

  //setSelectedOptions(selectedOptions.filter((option) => option !== value));

    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
      if (!startX) return;
      const x = e.touches[0].clientX;
      const distance = x - startX;
      containerRef.current.scrollLeft = scrollLeft - distance;
    };

    const handleTouchEnd = () => {
      setStartX(null);
    };

  return (
    <div
      className={`w-full bg-white px-[15px] py-[16px] rounded-2xl relative border-2 ${
        isOpen ? "open" : ""
      } ${className} ${
        isValid === "invalid"
          ? "border-red-500"
          : isValid === "valid"
          ? "border-green-500"
          : ""
      }`}
    >
      <div
        className={`bg-white flex items-center cursor-pointer justify-between `}
        onClick={handleToggle}
      >
        {selectedOptions.length > 0 ? (
          <div
            ref={containerRef}
            className="flex items-center overflow-x-auto max-w-[300px] gap-3"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overflow: "hidden",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {selectedOptions.map((option, index) => (
              <CategoryButton
                key={index}
                text={option.title}
                bgColor={option.background_color}
                textColor={option.text_color}
              />
            ))}
          </div>
        ) : (
          <h1 className="font-medium">აირჩიე კატეგორია</h1>
        )}
        <img
          src={ArrowDownIcon}
          alt="Arrow Down"
          className={`w-3 ml-2 transform ${
            isOpen
              ? "rotate-180 duration-300 ease-in-out"
              : "rotate-0 duration-300 ease-in-out"
          }`}
        />
      </div>
      <ul
        style={{
          ...dropdownStyles,
          position: "absolute",
          width: "100%",
          left: 0,
          top: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px 8px 8px 8px",
          zIndex: 30,
          backgroundColor: "white",
        }}
        className="flex flex-wrap px-2 gap-2 py-2 mt-1 scroll-container"
      >
        {categories.map((option) => (
          <div onClick={() => handleOptionClick(option)}>
            <CategoryButton
              text={option.title}
              bgColor={option.background_color}
              textColor={option.text_color}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectDropdown;
