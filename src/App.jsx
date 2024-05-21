import { Navbar } from "./components/Navbar";
import { Portada } from "./components/Portada";
import "./App.css";
import { Products } from "./components/Products.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <Portada />
      <Products />
    </>
  );
};
