import { reorder } from "react-icons-kit/fa/reorder"
import { home } from "react-icons-kit/fa/home"
import { user } from "react-icons-kit/fa/user"
import { shoppingCart } from "react-icons-kit/fa/shoppingCart"
import { signOut } from "react-icons-kit/fa/signOut"
import { close } from "react-icons-kit/fa/close"
import { shoppingBag } from "react-icons-kit/fa/shoppingBag"
import { shop } from "react-icons-kit/entypo/shop"
import { search } from "react-icons-kit/fa/search"
import Icon from "react-icons-kit";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./menu.css"

function Menu() {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [openMenu, setOpenMenu] = useState(false);
    const handleTouch = (e) => {
      let x = Math.min(Math.max(e.touches[0].clientX , 0),window.innerWidth)
      let y =Math.min(Math.max(e.touches[0].clientY , 0),window.innerHeight)
      setX(x)
      setY(y)
    }
    const handleleave = (e) => {
      let x = Math.min(Math.max(e.clientX , 0),window.innerWidth)
      let y =Math.min(Math.max(e.clientY , 0),window.innerHeight)
      setX(x)
      setY(y)
    };
    return (
      <div
        className={openMenu ? "holder-menu open" : "holder-menu"}
        style={{ left: `${x - 20}px`, top: `${y - 20}px` }}
        draggable
        onTouchMove={handleTouch}
        onDragEnd={handleleave}>
        <div className='menu controller' onClick={() => setOpenMenu(!openMenu)}>
          <Icon size={25} icon={openMenu ? close : reorder} />
        </div>
        <div className='menu l-search'>
          <Icon size={25} icon={search} />
        </div>
        <Link to={"/"} style={{textDecoration : "none"}}>
        <div className='menu l-home'>
          <Icon size={25} icon={home} />
        </div>
        </Link>
        <Link to="/products" style={{textDecoration : "none"}}>
        <div className='menu l-shop'>
          <Icon size={25} icon={shop} />
        </div>
        </Link>
        <Link to={"/cart"} style={{textDecoration : "none"}}>
        <div className='menu l-cart'>
          <Icon size={25} icon={shoppingCart} />
        </div>
        </Link>
        <div className='menu l-order'>
          <Icon size={25} icon={shoppingBag} />
        </div>
        <div className='menu l-prof'>
          <Icon size={25} icon={user} />
        </div>
        <div className='menu l-out'>
          <Icon size={25} icon={signOut} />
        </div>
      </div>
    );
}

export default Menu;