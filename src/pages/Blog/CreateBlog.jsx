import React from 'react'
import RedberryLogo from "../../assets/redberry_logo.png";
import ArrowIcon2 from "../../assets/Arrow-3.svg";
import UploadImg from '../../assets/folder-add.png'
import InputGroup from '../../components/InputGroup';
import TextareaGroup from '../../components/TextareaGroup';

const CreateBlog = () => {
  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
      <div className="flex items-center justify-center bg-white px-24 py-8">
        <img src={RedberryLogo} />
      </div>
      <div className="px-24 py-8 flex">
        <button
          className={`bg-[#FFFFFF] h-[44px] w-[44px] rounded-full flex items-center justify-center`}
        >
          <img src={ArrowIcon2} />
        </button>
        <div className="w-full justify-center flex">
          <div className="w-[720px] flex flex-col gap-4 ">
            <h1 className="font-bold text-[30px] leading-[45px]">
              ბლოგის დამატება
            </h1>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="font-medium leading-[20px]">ატვირთეთ ფოტო</p>
                <div className="relative cursor-pointer w-full bg-[#F4F3FF] border-[2px] border-dashed border-[#85858D] rounded-xl justify-center flex flex-col items-center gap-6 h-[180px]">
                  <input
                    type="file"
                    name="image"
                    className="cursor-pointer absolute top-0 left-0 w-full h-full opacity-0"
                    //   onChange={(event) => handleImageChange(event)}
                  />
                  <div className="flex flex-col items-center w-full">
                    <img src={UploadImg} />
                    <div class="flex gap-1">
                      <p>ჩააგდეთ ფაილი აქ ან </p>
                      <p class="font-medium underline"> აირჩიეთ ფაილი</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <InputGroup
                  label="სახელი"
                  type="text"
                  name="firstname"
                  hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  //   value={info.firstname}
                  //   changeHandler={handleTextInputChange}
                  //   isValid={validationErrors.personal.firstname}
                />
                <InputGroup
                  label="გვარი *"
                  type="text"
                  name="lastname"
                  hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  //   value={info.lastname}
                  //   changeHandler={handleTextInputChange}
                  //   isValid={validationErrors.personal.lastname}
                />
              </div>
              <TextareaGroup
                name="description"
                label="აღწერა"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                hint="მინიმუმ 4 სიმბოლო, ქართული ასოები"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog