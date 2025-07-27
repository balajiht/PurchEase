 import { useCart } from "../../../context/cart-context";
import { findproductincart } from "../../../utils/findproductincart";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();

  const isProductincart = findproductincart(cart, product.id);

  const oncardclick = (product) => {
    if (!isProductincart) {
      cartDispatch({
        type: 'ADD_TO_CART',
        payload: { product }
      });
    } else {
      navigate('/cart');
    }
  };

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="product" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => oncardclick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-symbols-outlined">
              {isProductincart ? 'shopping_cart_checkout' : 'shopping_cart'}
            </span>
            {isProductincart ? 'Go To Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};
