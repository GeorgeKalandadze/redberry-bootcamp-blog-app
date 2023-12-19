import React from 'react'
import Header from '../../components/Header';
import NatureImg from "../../assets/nature_img.jpg";
import CategoryButton from '../../components/CategoryButton';
const Blog = () => {
  return (
    <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
      <Header />
      <div className="w-full justify-center flex">
        <div className="w-[720px] flex flex-col gap-4">
          <img src={NatureImg} className="w-full rounded-xl h-[328px]" />
          <p className="text-[16px] font-medium">ლილე კვარაცხელია</p>
          <p className="font-small text-[#85858D]">
            02.11.2023 • lile.kvaratskhelia@redberry.ge
          </p>
          <h1 className="font-bold text-[20px] leading-[28px]">
            მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
          </h1>
          <div className="flex gap-3 flex-wrap">
            <CategoryButton
              text={"კვლევა"}
              bgColor={"#E9EFE9"}
              textColor={"#60BE16"}
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
              text={"ხელოვნური ინტელექტი"}
              bgColor={"#EEE1F7"}
              textColor={"#B71FDD"}
            />
          </div>
          <p className="text-[#404049] text-[16px] leading-[28px]">
            6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
            სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
            მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
            ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
            ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა
            უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
            გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
            სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
            შეაჯიბრონ ერთმანეთს. აქვე საგულისხმოა, რომ როგორც ბერნის მეცნიერები
            განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის გაუმჯობესებული
            წარმოება, არამედ კულტურული საკითხები დაედო. მათი თქმით, ადამიანებს
            უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ ორის კავშირის
            დანახვა. 6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა.
            მაქსიმალური სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ
            ყველს მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ.
            „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა
            ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა.
            რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
            გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
            სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
            შეაჯიბრონ ერთმანეთს.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog