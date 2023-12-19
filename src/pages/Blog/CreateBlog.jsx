import React from 'react'
import RedberryLogo from "../../assets/redberry_logo.png";
import ArrowIcon2 from "../../assets/Arrow-3.svg";
import UploadImg from '../../assets/folder-add.png'
import InputGroup from '../../components/InputGroup';
import TextareaGroup from '../../components/TextareaGroup';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';
import { useGlobalContext } from '../../context/Context';

const CreateBlog = () => {
    const {info} = useGlobalContext();

     const positions = [
      { label: "ჯუნიორ დეველოპერი", id: 1, team_id: 1 },
      { label: "მიდლ დეველოპერი", id: 2, team_id: 1 },
      { label: "სენიორ დეველოპერი", id: 3, team_id: 1 },
      { label: "ლიდდეველოპერი", id: 4, team_id: 1 },
      { label: "ჯუნიორ დიზაინერი", id: 5, team_id: 2 },
      { label: "მიდლ დიზაინერი", id: 6, team_id: 2 },
      { label: "ჯუნიორ დიზაინერი", id: 7, team_id: 2 },
      { label: "ჯუნიო HR", id: 8, team_id: 3 },
      { label: "მიდლ HR", id: 9, team_id: 3 },
      { label: "სენიორ HR", id: 10, team_id: 3 },
    ];

    const handleSelect = (selectedOption, field) => {
      setStore((formData) => ({
        ...formData,
        [field]: selectedOption,
      }));
    };

     console.log(info);

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
                  label="ავტორი *"
                  type="text"
                  name="author"
                  placeholder="შეიყვნეთ ავტორი"
                  hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  value={info.author}
                  //   changeHandler={handleTextInputChange}
                  //   isValid={validationErrors.personal.firstname}
                />
                <InputGroup
                  label="სათური *"
                  type="text"
                  name="title"
                  placeholder="შეიყვნეთ სათაური"
                  hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  value={info.title}
                  //   changeHandler={handleTextInputChange}
                  //   isValid={validationErrors.personal.lastname}
                />
              </div>
              <TextareaGroup
                name="description"
                label="აღწერა"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                hint="მინიმუმ 4 სიმბოლო, ქართული ასოები"
                value={info.description}
              />
              <div className="flex gap-8 items-center">
                <InputGroup
                  label="გამოქვეყნების თარიღი *"
                  type="date"
                  name="publish_date"
                  value={info.publish_date}
                  // changeHandler={handleTextInputChange}
                  // isValid={validationErrors.personal.firstname}
                />
                <div className="flex flex-col gap-3 w-full pb-3">
                  <p className={`font-bold text-[14px] text-[#1A1A1F] `}>
                    კატეგორია
                  </p>
                  <MultiSelectDropdown
                    options={positions}
                    label="პოზიცია"
                    //   value={info?.position?.label}
                    handleChange={(selectedOption) =>
                      handleSelect(selectedOption, "position")
                    }
                    //   isValid={validationErrors.personal.position}
                  />
                </div>
              </div>
              <div className="w-1/2 pr-4">
                <InputGroup
                  label="ელ-ფოსტა"
                  type="text"
                  name="email"
                  placeholder="Example@redberry.ge"
                  hint="მეილი უნდა მთავრდებოდეს @redberry.ge-ით"
                  value={info.email}
                  //   changeHandler={handleTextInputChange}
                  //   isValid={validationErrors.personal.lastname}
                />
              </div>
              <div className="flex justify-end mt-10">
                <button className="bg-[#adadad] rounded-md text-white px-10 py-3">
                  გამოქვეყნება
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog