import React, { useState } from 'react'
import Header from '../components/Header';
import Modal from '../components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalContext } from '../context/Context';
import ErrorIcon from "../assets/error.png";
import SuccessIcon from "../assets/success.png";
const GuestLayout = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const { isLogged, animations, setEmail, email, loginUser } =
      useGlobalContext();
     
      const openModal = () => {
        setShowModal(true);
      };

      const closeModal = () => {
        setShowModal(false);
      };

      const handleLogin = () => {
        if (email.endsWith("@redberry.ge")) {
          loginUser(email);
        } else {
          console.log("Email should end with @redberry.ge");
        }
      };

      const isInvalidEmail = email !== "" && !email.endsWith("@redberry.ge");

      const buttonStyles = {
        backgroundColor: !email.endsWith("@redberry.ge")
          ? "#CCCCCC"
          : "#5D37F3",
        cursor: !email.endsWith("@redberry.ge") ? "not-allowed" : "pointer",
      };

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
                    className={`text -[14px] font-normal  w-full border-[2px] rounded-xl px-[15px] py-[12px] outline-none ${
                      isLogged === "isNotLogged" || isInvalidEmail
                        ? "border-red-500"
                        : "border-[#5D37F3]"
                    }`}
                  />
                  {(isInvalidEmail || isLogged === "isNotLogged") && (
                    <div className="flex items-center gap-2 text-red-500">
                      <img src={ErrorIcon} alt="Error Icon" />
                      <span>
                        {isInvalidEmail
                          ? "მეილი უნდა მთავრდებოდეს @redberry.ge-ით"
                          : isLogged === "isNotLogged" ? "მეილი არ მოიძებნა" : ""}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="bg-[#5D37F3] rounded-xl w-full text-white py-[12px]"
                  style={buttonStyles}
                  onClick={() => handleLogin()}
                  disabled={!email.endsWith("@redberry.ge")}
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
      <motion.div
        className="max-w-[1920px] min-h-[1080px] bg-[#F3F2FA] flex flex-col gap-12"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Header openModal={openModal} />
        {children}
      </motion.div>
    </>
  );
}

export default GuestLayout