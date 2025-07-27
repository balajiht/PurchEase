import { Navbar } from "../../../components/Navbar"; 
import { useCart } from "../../../context/cart-context";
import { HorizontalProductCard } from "../../../HorizontalProductCard";
import { PriceDetails } from "../../../Pricedetails";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6">
        {cart?.length > 0 ? (
          <>
            <h2 className="text-3xl">My Cart</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-4">
                {cart.map(Product => (
                  <HorizontalProductCard key={Product.id} Product={Product} />
                ))}
              </div>
              <div>
                <PriceDetails />
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2>Cart Empty</h2>
            <p onClick={() => navigate('/')} className="text-blue-600 cursor-pointer underline">Click to Add item</p>
          </div>
        )}
      </main>
    </>
  );
};
