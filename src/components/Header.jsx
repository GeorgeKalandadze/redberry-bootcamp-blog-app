import React from 'react'
import RedberryLogo from '../assets/redberry_logo.png'
import { useGlobalContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ openModal }) => {
  const {isLogged} = useGlobalContext();
  const navigate = useNavigate()
  return (
    <div className="flex sticky top-0 z-40 items-center justify-between bg-white px-[30px] md:px-14 py-8 2xl:px-24">
      <Link to="/">
        <img src={RedberryLogo} className="w-[100px] md:w-auto" />
      </Link>
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