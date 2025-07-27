 import { useCart } from "../context/cart-context";
import { gettotalcartamount } from "../utils/gettotalcardamount";
import { displayRazorpay } from "../components/Navbar/paymentgateway";
import { useNavigate } from "react-router-dom";

export const PriceDetails = () => {
  const { cart } = useCart();
   const navigate = useNavigate();
  const tc=gettotalcartamount(cart);
  const dc=10;
  return (
  <div className="w-[300px]  bg-[#fafafa] p-4">
    <p className="text-2xl bprder-b p-2">Price Details</p>

    <div className="flex flex-col gapp-2">

      <div className="flex bprder-b">
        <p>Price ({cart.length}) items:</p>
        <p className="ml-auto">Rs.{tc}</p>
      </div>

      <div className="flex">
        <p>Delivery Charge:</p>
        <p className="ml-auto">Rs.{dc}</p>
      </div>

    </div>

    <div className="flex">
      <p>Total Amount:</p>
      <p className="ml-auto">Rs. {tc+dc}</p>
    </div>

    <button onClick={()=>displayRazorpay(tc, dc,navigate)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
      PLACE ORDER
    </button>
  </div>
);
};