import React, { useState } from 'react'
import Header from '../../components/Header';
import HomeImg from '../../assets/Blog-1024x355 1.png'
import CategoryButton from '../../components/CategoryButton';
import BlogCart from '../../components/BlogCart';
import NatureImg from "../../assets/nature_img.jpg";
import Modal from '../../components/Modal';
import InputGroup from '../../components/InputGroup';
import axios from 'axios';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import ErrorIcon from '../../assets/error.png'

const Home = () => {
  const [email, setEmail] = useSessionStorage("email", '')
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const loginUser = async (email) => {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer${"b5e0db82076215b2884e6558888b370b48558754b602fa59a385177db3a8e3ab"}`,
          },
        }
      );
      console.log("Login successful:", response);
      setError(false);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response);
      if (error.response && error.response.status === 422) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
      <Modal showModal={showModal} setShowModal={closeModal}>
        <div className="gap-6 flex flex-col">
          <h1 className="font-bold text-[32px]">შესვლა</h1>
          <form className="flex items-start flex-col gap-6 w-full pb-4">
            <div className="flex items-start flex-col gap-3 w-full">
              <label className={`font-bold text-[14px] text-[#1A1A1F] `}>
                ელ ფოსტა
              </label>
              <input
                placeholder="Example@redberry.ge"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border-[2px] rounded-xl px-[15px] py-[12px] outline-none ${
                  error ? "border-red-500" : "border-[#5D37F3]"
                }`}
              />
              {error && (
                <div className="flex items-center gap-2 text-red-500">
                  <img src={ErrorIcon} alt="Error Icon" />
                  <span>ელ-ფოსტა არ მოიძებნა</span>
                </div>
              )}
            </div>
            <button
              type="button"
              className="bg-[#5D37F3] rounded-xl w-full text-white py-[12px]"
              onClick={() => loginUser(email)}
            >
              შესვლა
            </button>
          </form>
        </div>
      </Modal>
      <Header openModal={openModal} />
      <div className="flex px-24 py-8 justify-between items-center">
        <h1 className="text-[64px] font-bold">ბლოგი</h1>
        <img src={HomeImg} className="w-[624px] h-[350px]" />
      </div>
      <div className="px-24 py-8 flex gap-10 justify-center">
        <CategoryButton
          text={"მარკეტი"}
          bgColor={"#FFB82F14"}
          textColor={"#D6961C"}
        />

        <CategoryButton
          text={"აპლიკაცია"}
          bgColor={"#1CD67D14"}
          textColor={"#15C972"}
        />
        <CategoryButton
          text={"ხელოვნური ინტელექტი"}
          bgColor={"#EEE1F7"}
          textColor={"#B71FDD"}
        />
        <CategoryButton
          text={"UI/UX"}
          bgColor={"#FA575714"}
          textColor={"#DC2828"}
        />
        <CategoryButton
          text={"კვლევა"}
          bgColor={"#E9EFE9"}
          textColor={"#60BE16"}
        />
      </div>
      <div className="px-24 py-8 flex justify-between flex-wrap gap-y-12">
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          img={NatureImg}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
      </div>
    </div>
  );
}

export default Home