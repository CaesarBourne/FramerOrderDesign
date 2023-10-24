import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../Base/Base";

const Toppings = ({ pizza, addTopping }: any) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial="hiddden"
      animate="visible"
      // exit="exit"
      exit={{ x: "-100vw" }}
      className="toppings container"
    >
      <ul>
        {toppings.map((item) => {
          let spanClass = pizza.toppings.includes(item) ? "active" : "";

          return (
            <motion.li
              onClick={() => {
                addTopping(item);
              }}
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={item}
            >
              <span className={spanClass}>{item}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

//before vairaints
// return (
//     <div className="toppings container">
//       <ul>
//         {toppings.map((item) => {
//           let spanClass = pizza.toppings.includes(item) ? "active" : "";

//           return (
//             <motion.li
//               onClick={() => {
//                 addTopping(item);
//               }}
//               whileHover={{
//                 scale: 1.3,
//                 color: "#f8e112",
//                 originX: 0,
//                 textShadow: "0px 0px 8px rgb(255,255,255)",
//                 boxShadow: "0px 0px 8px rgb(255,255,255)",
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//               key={item}
//             >
//               <span className={spanClass}>{item}</span>
//             </motion.li>
//           );
//         })}
//       </ul>

//       <Link to="/order">
//         <motion.button
//           whileHover={{
//             scale: 1.1,
//             textShadow: "0px 0px 8px rgb(255,255,255)",
//             boxShadow: "0px 0px 8px rgb(255,255,255)",
//           }}
//         >
//           Order
//         </motion.button>
//       </Link>
//     </div>
//   );

export default Toppings;
