/** @format */

import "./eachProduct.css";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import Same from "../../components/same/Same";
import Comment from "../../components/comment/Comment";
function EachProduct() {
  return (
    <div className='each-product'>
      <Navbar />
      <div className='title-products' data-aos='fade-up'>
        <h1>اطلاعات محصول</h1>
        <span className='absolute-span s1'></span>
        <span className='absolute-span s2'></span>
        <span className='absolute-span s3'></span>
        <span className='absolute-span s4'></span>
        <span className='absolute-span s5'></span>
      </div>
      <Product/>
      <Same/>
      <Comment/>
    </div>
  );
}

export default EachProduct;
