import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductsModal.scss";
import { Icon } from "./comp_icons/Icon";

export const ProductsModal = ({ producto }) => {
  return (
    <div className="modal-product_view">
      <div className="modal-imagen_view">
        <img src={producto.imageUrl} alt="" />
      </div>
      <div className="modal-info_view">
        <h3>Jelly Belly {producto.flavorName}</h3>
        <hr />
        <p className="description-modal">{producto.description}</p>
        <hr />
        <span className="ingredients">Ingredients : {producto.ingredients.join(' , ')}</span>
        <hr />
        <div className="price-button">
          <span>
            Precio : S/. {Math.floor(Math.random() * (10 - 5 + 1)) + 5},
            {Math.floor(Math.random() * 9) + 1}0
          </span>
          <button>
            Add to Cart <Icon icon={faShoppingCart}  /> +1
          </button>
        </div>
      </div>
    </div>
  );
};
