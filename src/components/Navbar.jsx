import React, { useState, useEffect } from "react";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./comp_icons/Icon";
import "./Navbar.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Loader } from "./Utils/Loader";

export const Navbar = ({ cantItems }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [containerResult, setContainerResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const { name, id } = useParams(); // Obtener parámetros de la URL
  const navigate = useNavigate(); // Para la navegación programática

  const handleSearch = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100`
      );
      const data = await response.json();
      setSearchResults(data.items);
      setContainerResult(true);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setLoader(false);
    }
  };

  const results = searchResults.filter((result) =>
    result.flavorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerResult && !e.target.closest(".buscador")) {
        setContainerResult(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [containerResult]);

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
          Envío Gratuito a partir de S/. 100 - 10% de descuento con HPNY10
        </div>
      </div>

      <nav className="nav-bar-container">
        <div className="logo">
          <Link to="/home">
            <img
              src="https://popsamerica.com/img/logo-1693608144.webp"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="buscador">
          <div className="input-search">
            <input
              onClick={() => {
                if (!containerResult) {
                  handleSearch(); // Llamar a la función de búsqueda si el contenedor está vacío
                }
                setContainerResult(true);
              }}
              type="text"
              placeholder="Busca en nuestro catálogo"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="search-button"
              onClick={() => {
                handleSearch();
                setSearchTerm(""); // Limpiar el input
              }}
            >
              <Icon icon={faSearch} />
            </button>
          </div>
          {containerResult && (
            <div className="search-results-container">
              {results.map((result) => (
                <Link
                  to={"/products/" + result.flavorName + "/" + result.beanId}
                  key={result.beanId}
                >
                  {loader && <Loader />}
                  <div
                    key={result.beanId}
                    onClick={() => {
                      setContainerResult(false); // Cerrar resultados de búsqueda al hacer clic
                      navigate(
                        `/products/${result.flavorName}/${result.beanId}`
                      ); // Navegar al producto
                    }}
                  >
                    <div className="search-result-item">
                      <img src={result.imageUrl} alt={result.flavorName} />
                      <div className="title">{result.flavorName}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="shopping-cart">
          <div className="cart">
            <Icon icon={faShoppingCart} />
            <div className="items">{cantItems}</div>
          </div>
        </div>
      </nav>
    </>
  );
};
