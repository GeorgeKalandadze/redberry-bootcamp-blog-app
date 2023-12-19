import React from "react";

const CategoryButton = ({ text, bgColor, textColor }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: "12px",
    borderRadius: "30px",
    padding:"8px 18px"
  };

  return <button style={buttonStyle} className="font-medium">{text}</button>;
};

export default CategoryButton;
