 import { useCart } from "../context/cart-context";
 export const HorizontalProductCard = ({ Product }) => {
     const {cartDispatch}=useCart();
    const onremoveclick=(Product)=>{
      cartDispatch({
        type:'REMOVE_FROM_CART',
        payload:{
            id:Product.id
        }
      })

    }
  return (
    <div className="card-horizontal d-flex shadow">
      <div className="card-hori-image-container relative">
        <img className="card-image" src={Product.images} alt="shoes" />
      </div>

      <div className="card-details d-flex direction-column">
        <div className="card-title">{Product.title}</div>

        <div className="card-description">
          <p className="card-price">Rs. {Product.price}</p>
        </div>

        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>

        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
           <button
    onClick={() => onremoveclick(Product)}
    className="flex items-center justify-center gap-2 mt-2 p-1 bg-green-700 text-white rounded hover:bg-green-800"
  >
    <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    Remove From Cart
  </button>

          </div>
        </div>
      </div>
    </div>
  );
};
