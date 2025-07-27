import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Home/Cart"; 
import { Authlogin } from "./Authlogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} /> 
       <Route path="/Authlogin" element={<Authlogin/>}/>
    </Routes>
  );
}

export default App;
