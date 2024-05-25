import { Navbar } from "./components/Navbar";
import { Portada } from "./components/Portada";
import "./App.css";
import { Item } from "./components/page_products/Item.jsx";
import { Products } from "./components/Products.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";

export const App = () => {
  const [prodItems, setProdItems] = useState(0);
  const aumentar = () => {
    setProdItems(prodItems + 1);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={"/home"}
            element={
              <>
                <Navbar cantItems={prodItems} />
                <Portada />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar cantItems={prodItems} />
                <Products onClick={aumentar} />
              </>
            }
          />
          <Route
            path={"/products/:name/:id"}
            element={
              <>
                <Navbar cantItems={prodItems} />
                <Item onClick={aumentar} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
