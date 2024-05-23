import { Navbar } from "./components/Navbar";
import { Portada } from "./components/Portada";
import "./App.css";
import { Products } from "./components/Products.jsx";
import { useState } from "react";

export const App = () => {
  const [prodItems, setProdItems] = useState(0);
  const aumentar = () => {
    setProdItems(prodItems + 1);
  };
  return (
    <>
      <Navbar cantItems={prodItems} />
      <Products onClick={aumentar} />
    </>
  );
};
