import React from 'react'
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useGlobalContext } from '../../context/Context';

const NotFound = () => {
  const { animations } = useGlobalContext();
   
  return (
    <motion.div
      className="min-w-[1920px] h-[1080px] bg-[#E4E3EB] flex flex-col justify-center"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className="w-full flex justify-center items-center h-full flex-col gap-6">
        <h2 className="text-[32px] font-bold leading-[38px] w-[800px] text-center">
          თქვენ არ ხართ დალოგინებული და არ გაქვთ ბლოგის შექმნის უფლება.
        </h2>
        <Link to="/">
          <button className="bg-[#5D37F3] rounded-md  h-[50px] text-white text-[25px] px-6">
            მთავარ გვერდე დაბრუნება
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;