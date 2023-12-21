import React from "react";
// import SuccessIcon from "../assets/success-icon.png";
const InputGroup = ({
  label,
  type,
  placeholder,
  name,
  value,
  hint,
  changeHandler,
  isValid,
  focusHandler,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <label
        className={`font-bold text-[14px] text-[#1A1A1F] ${
          isValid == "invalid" ? "text-red-500" : ""
        } md:text-[16px]`}
      >
        {label}
      </label>
      <div className="w-full relative">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onFocus={focusHandler}
          className={`w-full border-[2px] ${
            isValid == "invalid"
              ? "border-red-500"
              : isValid == "valid"
              ? "border-green-500"
              : "#c3c2c8"
          } border-[#c3c2c8] rounded-2xl px-[15px] py-[16px] outline-none
          ${isValid == "valid" ? "bg-[#F8FFF8]" : ""}`}
          onChange={changeHandler}
        />
        {/* {isValid == "valid" && (
          <img src={SuccessIcon} className="absolute right-2 top-5" />
        )} */}
      </div>

      <p
        className={`font-small text-[13px] ${
          isValid === "invalid"
            ? "text-red-500"
            : isValid === "valid"
            ? "text-green-500"
            : "text-[#85858D]"
        } md:text-15px`}
      >
        {hint}
      </p>
    </div>
  );
};

export default InputGroup;
