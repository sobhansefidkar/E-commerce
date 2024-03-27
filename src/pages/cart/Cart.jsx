/** @format */

import Navbar from "../../components/navbar/Navbar";
import ProductsInCart from "../../components/productsInCart/ProductsInCart";
import Pros from "../../components/pros/Pros";
import "./cart.css"

function Cart() {
  return (
    <div className='cart'>
      <Navbar />
      <div className='title-products' data-aos='fade-up'>
        <h1>سبد خرید</h1>
        <span className='absolute-span s1'></span>
        <span className='absolute-span s2'></span>
        <span className='absolute-span s3'></span>
        <span className='absolute-span s4'></span>
        <span className='absolute-span s5'></span>
      </div>
      <div className='container cart-container'>
        <ProductsInCart />
        <Pros/>
      </div>
    </div>
  );
}

export default Cart;
