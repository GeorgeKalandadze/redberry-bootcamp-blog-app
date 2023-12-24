import React from "react";

const CategoryButton = ({ text, bgColor, textColor }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: "12px",
    borderRadius: "30px",
    padding: "8px 16px",
    whiteSpace: "nowrap",
  };

  return <button style={buttonStyle} className="" type="button">{text}</button>;
};

export default CategoryButton;
