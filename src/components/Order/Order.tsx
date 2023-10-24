import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { containerVariants } from "../Base/Base";

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const orderParentVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      //   delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Order = ({ pizza, showModal, setShowModal }: any) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={orderParentVariants}
      initial="hidden"
      animate="visible"
      // exit="exit"
      exit={{ x: "-100vw" }}
    >
      {showTitle && <h2>Thank you for your order :)</h2>}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} with{" "}
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping: any) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
