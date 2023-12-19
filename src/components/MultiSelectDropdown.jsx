import React, { useEffect, useState } from "react";
import ArrowDownIcon from "../assets/Vector.png";
import CategoryButton from "./CategoryButton";
import axios from "axios";

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
  const [selectedOptions, setSelectedOptions] = useState([]);

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

console.log(categories);
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
    // overflow: "hidden",
  };




  console.log(selectedOptions);

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
        className={`bg-white flex items-center cursor-pointer justify-between`}
        onClick={handleToggle}
      >
        {value ? (
          <h1 className="font-medium">{value}</h1>
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
          <div >
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
