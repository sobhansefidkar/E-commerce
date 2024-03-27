import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Mneu";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/ProductsPage";
import EachProduct from "./pages/eachproduct/EachProduct";
import Cart from "./pages/cart/Cart";
import Register from "./pages/reginster/register";
import SignIn from "./pages/signIn/signin";



function App() {

  return (
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="signIn" element={<SignIn/>}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/product/:id" element={<EachProduct/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
