import React from "react";

const TextareaGroup = ({
  label,
  hint,
  placeholder,
  value,
  changeHandler,
  name,
  validation = "",
}) => {
  const inputClass = `outline-none py-3 rounded px-3 w-full ${
    validation === "invalid"
      ? "border-[1px] border-red-500"
      : validation === "valid"
      ? "border-[1px] border-green-500"
      : ""
  }`;
  return (
    <div className="flex flex-col gap-3">
      <label
        className={`font-bold text-[14px] text-[#1A1A1F] ${
          validation == "invalid" ? "text-red-500" : ""
        } md:text-[16px]`}
      >
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`resize-none rounded-2xl px-2 py-2 h-[200px] outline-none ${
          validation === "invalid"
            ? "border-[1px] border-red-500"
            : validation === "valid"
            ? "border-[1px] border-green-500"
            : ""
        }`}
        value={value}
        onChange={(event) => changeHandler(event)}
      ></textarea>
      <p
        className={`font-small text-[13px] text-[#85858D] ${
          validation == "invalid" ? "text-red-500" : ""
        } md:text-15px`}
      >
        {hint}
      </p>
    </div>
  );
};

export default TextareaGroup;
