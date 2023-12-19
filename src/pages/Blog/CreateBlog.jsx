import React from 'react'
import RedberryLogo from "../../assets/redberry_logo.png";
const CreateBlog = () => {
  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
      <div className="flex items-center justify-center bg-white px-24 py-8">
        <img src={RedberryLogo} />
      </div>
    </div>
  );
}

export default CreateBlog