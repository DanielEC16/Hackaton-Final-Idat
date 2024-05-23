import { useEffect, useState } from "react";
import "./Products.scss";
import { Icon } from "./comp_icons/Icon";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { ProductsModal } from "./ProductsModal";

export const Products = ( {onClick} ) => {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalProductId, setModalProductId] = useState(null);

  const fetchCategories = async () => {
    try {
      const url =
        "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=10";
      const data = await fetch(url);
      const result = (await data.json()).items;
      console.log(result);
      setProd(result);
    } catch (error) {
      setError(true);
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleModalToggle = (productId) => {
    setModalProductId((prevId) => (prevId === productId ? null : productId));
  };

  return (
    <>
      <div className="container-products">
        {prod.map((producto) => (
          <div className="card" key={producto.beanId}>
            <div className="producto_description">
              <h4>Jelly Belly {producto.flavorName}</h4>
              <p>
                Precio : S/.{Math.floor(Math.random() * (10 - 5 + 1)) + 5},
                {Math.floor(Math.random() * 9) + 1}0
              </p>
              <button className="shoping" onClick={onClick}>
                Agregar <Icon icon={faCartShopping} />
              </button>
              <button
                className="look"
                onClick={() => handleModalToggle(producto.beanId)}
              >
                Vista Rapida
                <Icon icon={faEye} />
              </button>
            </div>
            <article className="producto">
              <div className="producto_image">
                <img
                  src={producto.imageUrl}
                  alt={producto.flavorName}
                  className="producto_img_dulce"
                />
              </div>
            </article>
          </div>
        ))}
      </div>
      {modalProductId !== null && (
        <div
          className="modal-background"
          onClick={() => setModalProductId(null)}
        >
          <div className="modal-content">
            <ProductsModal
              producto={prod.find((p) => p.beanId === modalProductId)}
            />
          </div>
        </div>
      )}
    </>
  );
};
