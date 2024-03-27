/** @format */
import Aos from "aos";
import 'aos/dist/aos.css';
import "./navbar.css";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";

function Navbar() {
    Aos.init()
  return (
    <div className='navbar-css' data-aos='fade-down' data-aos-duration='1000'>
      <div className='container navbar-container'>
        <div className='r-nav'>
          <button>ورود</button>
          <button>ثبت نام</button>
        </div>
        <div className='c-nav'>
          <input type='text' placeholder='جستجو...' />
          <span className='search-icon'>
            <Icon size={30} icon={search} style={{ color: "white" }} />
          </span>
        </div>
        <div className='l-nav'>
          <span>GUZAL</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
