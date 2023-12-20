import React from 'react'
import RedberryLogo from '../assets/redberry_logo.png'

const Header = ({ openModal }) => {
  return (
    <div className="flex items-center justify-between bg-white px-24 py-8">
      <img src={RedberryLogo} />
      <button
        className="bg-[#5D37F3] rounded-md w-[93px] h-[40px] text-white text-[14px]"
        onClick={openModal}
      >
        {" "}
        შესვლა
      </button>
    </div>
  );
};

export default Header