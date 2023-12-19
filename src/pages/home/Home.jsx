import React from 'react'
import Header from '../../components/Header';
import HomeImg from '../../assets/Blog-1024x355 1.png'
import CategoryButton from '../../components/CategoryButton';
import BlogCart from '../../components/BlogCart';

const Home = () => {
  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
      <Header />
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
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
        <BlogCart
          name={"ლილე კვარაცხელია"}
          date={"02.11.2023"}
          announcement={"EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა"}
          description="6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        />
      </div>
    </div>
  );
}

export default Home