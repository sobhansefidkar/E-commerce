/** @format */

import "./products.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Images from "../images/images";
import Icon from "react-icons-kit";
import {filter} from "react-icons-kit/fa/filter";
import { useGlobalContext } from "../../context";

function Products() {
  const {handleOpenFilter , setOpenSort , openSort} = useGlobalContext()
  Aos.init();
  useEffect(() => {
    const lis = document.querySelectorAll(".li");
    lis.forEach((item) => {
      item.addEventListener("click", function () {
        for (let i = 0; i < lis.length; i++) {
          lis[i].classList.remove("active");
        }
        item.classList.add("active");
      });
    });
  }, []);

  return (
    <div className='products'>
      <div className='sort' data-aos='fade-up' data-aos-duration='1000'>
          <span onClick={handleOpenFilter} style={{width : "100px"}}>فیلتر <Icon icon={filter}/></span>
          <span style={{width : "200px"}} onClick={() => setOpenSort(!openSort)}>دسته بندی</span>
        <ul className={openSort ? "opensort" : ""}>
          <li className='li lists active '>پرفروش ترین</li>
          <li className='li lists'>جدیدترین</li>
          <li className='li lists'>قدیمی ترین</li>
          <li className='li lists'>تخفیف دار</li>
          <li className='li lists'>گران ترین ها</li>
          <li className='li lists'>ارزان ترین ها</li>
        </ul>
      </div>
      <div className='each-product'>
        <div className='pros'>
          <Images />
        </div>
      </div>
    </div>
  );
}

export default Products;
