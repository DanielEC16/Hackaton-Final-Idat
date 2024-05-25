import { useEffect, useState } from "react";
import "./Products.scss";
import { Icon } from "./comp_icons/Icon";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { ProductsModal } from "./ProductsModal";
import { Loader } from "./Utils/Loader";
import { Error } from "./Utils/Error";
import { Link } from "react-router-dom";

export const Products = ({ onClick }) => {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalProductId, setModalProductId] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoader(true);
      const url =
        "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=20";
      const data = await fetch(url);
      const result = (await data.json()).items;
      console.log(result);
      setProd(result);
    } catch (error) {
      setError(true);
      console.log("Error fetching categories:", error);
    } finally {
      setLoader(false);
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
        {prod.map((product) => (
          <div className="card" key={product.beanId}>
            <div className="producto_description">
              <Link
                to={'/products/'+product.flavorName+'/'+product.beanId}
                className="product-link"
              >
                <h4>Jelly Belly {product.flavorName}</h4>
                <p>
                  Precio : S/.{Math.floor(Math.random() * (10 - 5 + 1)) + 5},
                  {Math.floor(Math.random() * 9) + 1}0
                </p>
              </Link>
              <button className="shoping" onClick={onClick}>
                Agregar <Icon icon={faCartShopping} />
              </button>
              <button
                className="look"
                onClick={() => handleModalToggle(product.beanId)}
              >
                Vista Rapida
                <Icon icon={faEye} />
              </button>
            </div>
            <article className="producto">
              <div className="producto_image">
                <img
                  src={product.imageUrl}
                  alt={product.flavorName}
                  className="producto_img_dulce"
                />
              </div>
            </article>
          </div>
        ))}
      </div>
      {error && <Error />}
      {loader && <Loader />}
      {modalProductId !== null && (
        <div
          className="modal-background"
          onClick={() => setModalProductId(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ProductsModal
              onClick={onClick}
              producto={prod.find((p) => p.beanId === modalProductId)}
            />
          </div>
        </div>
      )}
    </>
  );
};
