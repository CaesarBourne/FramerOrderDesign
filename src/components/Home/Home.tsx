import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const buttonVariant = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeat: Infinity,
      // repeatType: "reverse",
      // delay: 1,
      duration: 0.5,
      // ease: [0.075, 0.82, 0.165, 1],
      // repeat: Infinity,
      // repeatType: "reverse",
    },
  },
};
const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={homeVariant}
      initial="hidden"
      animate="visible"
      // exit="exit"
      exit={{ x: "-100vw" }}
      className="home container"
    >
      <h2>Welcome to Caesars Place</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Order
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

//before variant
// const Home = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 1.5, duration: 1.5 }}
//       className="home container"
//     >
//       <h2>Welcome to Caesars Place</h2>
//       <Link to="/base">
//         <motion.button
//           whileHover={{
//             scale: 1.5,
//             textShadow: "0px 0px 8px rgb(255,255,255)",
//             boxShadow: "0px 0px 8px rgb(255,255,255)",
//           }}
//         >
//           Create Your Order
//         </motion.button>
//       </Link>
//     </motion.div>
//   );
// };

export default Home;
