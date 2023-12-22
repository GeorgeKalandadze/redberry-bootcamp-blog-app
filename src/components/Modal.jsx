import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '../assets/close.png'

const Modal = ({ showModal, setShowModal, children }) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter={false}>
      {showModal && (
        <motion.div
          className="modal-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex:40
          }}
        >
          <motion.div
            className="modal-content"
            variants={modal}
            initial="hidden"
            animate="visible"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "80%",
              width: "480px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end" onClick={closeModal}>
              <img src={CloseIcon} />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
