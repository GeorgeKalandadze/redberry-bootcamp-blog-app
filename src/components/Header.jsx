import React from 'react'
import RedberryLogo from '../assets/redberry_logo.png'
import { useGlobalContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Header = ({ openModal }) => {
  const {isLogged} = useGlobalContext();
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between bg-white px-[30px] md:px-14 py-8 2xl:px-24">
      <img src={RedberryLogo} className="w-[100px] md:w-auto" />
      {isLogged === "isLogged" ? (
        <button
          className="bg-[#5D37F3] rounded-md px-3 py-2  md:px-[20px] md:py-[10px] text-white text-[14px]"
          onClick={() => navigate("/create-blog")}
        >
          დაამატე ბლოგი
        </button>
      ) : isLogged === "isNotLogged" || isLogged === "" ? (
        <button
          className="bg-[#5D37F3] rounded-md px-3 py-2  md:px-[20px] md:py-[10px] text-white text-[14px]"
          onClick={openModal}
        >
          შესვლა
        </button>
      ) : null}
    </div>
  );
};

export default Header