import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../context/login-context";
import { useCart } from "../../context/cart-context";

export const Navbar = () => {
  const [accdp, setaccdp] = useState(false);
  const navigate = useNavigate();
  const { token, loginDispatch } = useLogin();
  const { cart } = useCart(); // Assuming cart is an array

  const onloginclick = () => {
    if (token?.access_token) {
      loginDispatch({ type: "LOGOUT" });
      localStorage.removeItem("token"); // optional: clear token from storage
      navigate("/Authlogin");
    } else {
      navigate("/Authlogin");
    }
  };

  return (
    <header className="flex bg-green-800 py-4 px-4 items-center">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="text-slate-50 text-5xl hover:cursor-pointer"
        >
          PurchEase
        </h1>
      </div>

      <nav className="ml-auto flex gap-6 relative items-center">
        <div className="relative hover:cursor-pointer" onClick={() => navigate("/cart")}>
          <span className="material-symbols-outlined text-3xl text-white">
            shopping_cart
          </span>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        

        <div className="relative">
          <span
            onClick={() => setaccdp(!accdp)}
            className="material-symbols-outlined text-3xl hover:cursor-pointer text-white"
          >
            account_circle
          </span>

          {accdp && (
            <div className="absolute bg-white shadow-md mt-2 right-0 px-4 py-2 rounded">
              <button onClick={onloginclick} className="text-black hover:underline">
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
