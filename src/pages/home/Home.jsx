/** @format */

import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";
import Off from "../../components/off/off";
import Newest from "../../components/newest/Newest";
import Bestseller from "../../components/bestseller/BestSeller";
import Visit from "../../components/visitShop/Visit";

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Category />
      <Off />
      <Bestseller />
      <Visit />
      <Newest />
    </div>
  );
}

export default Home;
