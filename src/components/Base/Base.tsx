import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type base = {
  pizza: any;
};

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
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
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 150 },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeat: Infinity,
      // repeatType: "reverse",
      //   duration: 0.5,
      //   repeatType: "reverse",
    },
  },
};
const Base = ({ pizza, addbase }: any) => {
  let pizzaList = ["TrippleDeckerCheeese", "Debonairs", "DodoPizza"];

  return (
    //before vairaiance
    // <motion.div
    //   initial={{ x: "100vw" }}
    //   animate={{ x: 0 }}
    //   transition={{ type: "spring", delay: 0.5 }}
    //   className="base container"
    // >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="base container"
      // exit="exit"
      exit={{ x: "-100vw" }}
    >
      <ul>
        {pizzaList.map((item) => {
          let spanClass = item == pizza.base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              onClick={() => {
                addbase(item);
              }}
              key={item}
            >
              <span className={spanClass}>{item}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
      {/* {pizza.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )} */}
    </motion.div>
  );
};

export default Base;

//before variants

// const Base = ({ pizza, addbase }: any) => {
//     let pizzaList = ["TrippleDeckerCheeese", "Debonairs", "DodoPizza"];

//     return (
//       //before vairaiance
//       // <motion.div
//       //   initial={{ x: "100vw" }}
//       //   animate={{ x: 0 }}
//       //   transition={{ type: "spring", delay: 0.5 }}
//       //   className="base container"
//       // >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="base container"
//       >
//         <ul>
//           {pizzaList.map((item) => {
//             let spanClass = item == pizza.base ? "active" : "";
//             return (
//               <motion.li
//                 whileHover={{
//                   scale: 1.3,
//                   color: "#f8e112",
//                   originX: 0,
//                   textShadow: "0px 0px 8px rgb(255,255,255)",
//                   boxShadow: "0px 0px 8px rgb(255,255,255)",
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 onClick={() => {
//                   addbase(item);
//                 }}
//                 key={item}
//               >
//                 <span className={spanClass}>{item}</span>
//               </motion.li>
//             );
//           })}
//         </ul>
//         {pizza.base && (
//           <motion.div variants={nextVariants} className="next">
//             <Link to="/toppings">
//               <motion.button
//                 whileHover={{
//                   scale: 1.2,
//                   textShadow: "0px 0px 8px rgb(255,255,255)",
//                   boxShadow: "0px 0px 8px rgb(255,255,255)",
//                 }}
//               >
//                 Next
//               </motion.button>
//             </Link>
//           </motion.div>
//         )}
//         {/* {pizza.base && (
//           <motion.div
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 150 }}
//             className="next"
//           >
//             <Link to="/toppings">
//               <motion.button
//                 whileHover={{
//                   scale: 1.2,
//                   textShadow: "0px 0px 8px rgb(255,255,255)",
//                   boxShadow: "0px 0px 8px rgb(255,255,255)",
//                 }}
//               >
//                 Next
//               </motion.button>
//             </Link>
//           </motion.div>
//         )} */}
//       </motion.div>
//     );
//   };
