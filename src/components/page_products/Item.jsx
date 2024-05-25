import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Utils/Loader";
import { Error } from "../Utils/Error";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../comp_icons/Icon";
import "./Item.scss";

export const Item = ({onClick}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `https://jellybellywikiapi.onrender.com/api/Beans/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-page">
      <div className="product-page-img">
        <img src={product.imageUrl} alt={product.flavorName} />
      </div>

      
      <div className="product-page-details">
        <h2 className="tittle">Jelly Belly{product.flavorName} <br /> <span>{product.groupName[1]}</span></h2>
        <hr />
        <div className="sub-details">
            <p>{product.description}</p>
            <span>Ingredientes : {product.ingredients.join(' , ')}</span>
            <ul>
                <li>Contain Gluten : {product.glutenFree? "Si contiene" : "No contiene"}</li>
                <li>Contain Suggar : {product.sugarFree? "Si contiene" : "No Contiene"}</li>
                <li>Is it kosher? : {product.kosher? "Si lo es" : "No lo es"}</li>
            </ul>
        </div>
        <hr />
        <div className="price-button">
          <span>
            Precio : S/. {Math.floor(Math.random() * (10 - 5 + 1)) + 5},
            {Math.floor(Math.random() * 9) + 1}0
          </span>
          <button onClick={onClick}>
            Add to Cart <Icon icon={faShoppingCart}  /> +1
          </button>
        </div>
        
      </div>
    </div>
  );
};
