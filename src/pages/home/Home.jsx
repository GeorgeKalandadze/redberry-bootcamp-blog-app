import React, { useEffect, useState } from 'react'
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
import SuccessIcon from '../../assets/success.png'
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalContext } from '../../context/Context';

const Home = () => {
  const [email, setEmail] = useSessionStorage("email", '')
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const { categories, isLogged, setIsLogged, blogs } = useGlobalContext();

  const loginUser = async (email) => {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer${"282c0587589f7516edf61b215c828ba8047b67aabbe141c5d17ec45c0d624fd0"}`,
          },
        }
      );
      console.log("Login successful:", response);

      if (response.status === 204) {
        setError("valid");
        setIsLogged("isLogged")
      } else {
        setError("invalid");
        setIsLogged("isNotLogged");
      }

      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response);
      setError("invalid");
      setIsLogged("isNotLogged");
    }
  };



  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const isPublished = (publishDate) => {
    const timestamp1 = new Date().getTime();
    const timestamp2 = new Date(publishDate).getTime();

    if(timestamp2 > timestamp1){
      return true
    }else{
      return false
    }
  }



  const [selectedCategories, setSelectedCategories] = useSessionStorage("categories",[]);

  const toggleCategorySelection = (categoryId) => {
    const index = selectedCategories.indexOf(categoryId);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const updatedCategories = [...selectedCategories];
      updatedCategories.splice(index, 1); 
      setSelectedCategories(updatedCategories);
    }
  };

  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        selectedCategories.some((selectedCat) =>
          blog.categories.some((blogCat) => blogCat.id === selectedCat)
        )
      );
      setFilteredBlogs(filtered);
    }
  }, [selectedCategories, blogs]);

 

  return (
    <>
      <Modal showModal={showModal} setShowModal={closeModal} error={isLogged}>
        <AnimatePresence>
          {isLogged === "isNotLogged" || isLogged === "" ? (
            <motion.div
              key="invalidContent"
              className="gap-6 flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
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
                      isLogged === "isNotLogged"
                        ? "border-red-500"
                        : "border-[#5D37F3]"
                    }`}
                  />
                  {isLogged === "isNotLogged" && (
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
            </motion.div>
          ) : isLogged === "isLogged" ? (
            <motion.div
              key="validContent"
              className="gap-6 flex flex-col justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img src={SuccessIcon} alt="Success Icon" />
              <h1 className="font-bold text-[25px]">წარმატებული ავტორიზაცია</h1>
              <button
                type="button"
                className="bg-[#5D37F3] rounded-xl text-white py-[12px] w-full"
                onClick={() => setShowModal(false)}
              >
                კარგი
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Modal>
      <div className="min-w-[1920px] min-h-[1080px] bg-[#E4E3EB] flex flex-col gap-12">
        <Header openModal={openModal} />
        <div className="flex px-24 py-8 justify-between items-center">
          <h1 className="text-[74px] font-bold">ბლოგი</h1>
          <img src={HomeImg} className="w-[624px] h-[350px]" />
        </div>
        <div className="px-24 py-8 category-scroll-container">
          <div className="category-scroll-content">
            {categories.map((option) => (
              <div
                key={option.id}
                className={`category-scroll-item ${
                  selectedCategories.includes(option.id)
                    ? "border-[2px] border-black"
                    : ""
                } `}
                style={{ borderRadius: "30px" }}
                onClick={() => {
                  toggleCategorySelection(option.id);
                }}
              >
                <CategoryButton
                  text={option.title}
                  bgColor={option.background_color}
                  textColor={option.text_color}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-24 py-8 flex justify-between flex-wrap gap-y-12">
          {filteredBlogs
            .filter((blog) => !isPublished(blog.publish_date))
            .map((blog) => (
              <BlogCart
                key={blog.id}
                name={blog.author}
                date={blog.publish_date}
                img={blog.image}
                announcement={blog.title}
                description={blog.description}
                categories={blog.categories}
                id={blog.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home