import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const Modal = ({ showModal, setShowModal }: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
          exit={{ x: "-100vw" }}
        >
          <motion.div variants={modal} exit={{ opacity: 0 }} className="modal">
            <p>Want to make another Pizza</p>
            <Link to={"/"}>
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
