/** @format */

import "./filter.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Icon from "react-icons-kit";
import { close } from "react-icons-kit/fa/close";
import { useGlobalContext } from "../../context";

function Filter() {
  const {openFilter , setOpenFilter} = useGlobalContext()
  Aos.init();

  return (
    <div className={openFilter ? "filter openf" :'filter'}>
      <div
        className='filter-box'
        data-aos='fade-up'
        data-aos-duration='1000'>
        <div className='title-filter'>
          <span style={{cursor : "pointer"}} className="close-filter" onClick={() => setOpenFilter(false)}>
            <Icon size={25} icon={close}></Icon>
          </span>
          <h4>فیلترها</h4>
          <button>حذف فیلتر</button>
        </div>
        <div className='filter-items'>
          <div className='f-item'>
            <label>فقط موجود ها :</label>
            <input type='checkbox' style={{ width: "20px", height: "20px" }} />
          </div>
          <div className='f-item'>
            <label>جستجو :</label>
            <input type='text' style={{ width: "130px" }} min={1} />
          </div>
          <div className='f-item'>
            <label>حداقل قیمت :</label>
            <input type='number' style={{ width: "100px" }} min={1} />
          </div>
          <div className='f-item'>
            <label>حداکثر قیمت :</label>
            <input type='number' style={{ width: "100px" }} min={1} />
          </div>
          <button className='add-filter'>اعمال فیلتر</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
