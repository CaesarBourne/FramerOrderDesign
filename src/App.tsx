import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState } from "react";
import Base from "./components/Base/Base";
import Toppings from "./components/Toppings/Toppings";
import Order from "./components/Order/Order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal/Modal";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const addBase = (base: any) => {
    setPizza({ ...pizza, base });
  };
  const addTopping = (topping: never) => {
    console.log("logged topping ", topping);
    let newTopping: any = [];
    if (!pizza.toppings.includes(topping)) {
      newTopping = [...pizza.toppings, topping];
    } else {
      newTopping = pizza.toppings.filter((item) => item !== topping);
    }
    console.log("LATES TOPPING ", newTopping);

    setPizza({ ...pizza, toppings: newTopping });
  };
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base pizza={pizza} addbase={addBase} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
