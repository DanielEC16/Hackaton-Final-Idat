import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./comp_icons/Icon";
import "./Navbar.scss";
import { useState } from "react";

export const Navbar = ({ cantItems }) => { // Aquí recibimos la función como prop
  
  return (
    <>
      <div className="slider">
        <div className="slider-content-track">
          <div className="slider-content">
            <p>Tenemos los mejores precios</p>
          </div>
          <div className="slider-content">
            <p>Tenemos los mejores precios</p>
          </div>
          <div className="slider-content">
            <p>Tenemos los mejores precios</p>
          </div>
        </div>
      </div>
      <div className="promocion">
        <div className="text-promocion">
          Envio Gratuito apartir de S/. 100 - 10% de descuento con HPNY10
        </div>
      </div>
      <nav className="nav-bar-container">
        <div className="logo">
          <img
            src="https://popsamerica.com/img/logo-1693608144.webp"
            alt=""
          />
        </div>
        <div className="input-search">
          <input type="text" placeholder="Busca en nuestro catalogo" />
          <button className="search-button">
            <Icon icon={faSearch} />
          </button>
        </div>
        <div className="shopingcart">
          <div className="cart">
            <Icon icon={faShoppingCart} />
            <div className="items">{cantItems}</div>
          </div>
        </div>
      </nav>
    </>
  );
};