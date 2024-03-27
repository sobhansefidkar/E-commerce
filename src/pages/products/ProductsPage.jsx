import { useEffect } from "react";
import Filter from "../../components/filter/filter";
import Navbar from "../../components/navbar/Navbar"
import Products from "../../components/products/products";
import "./productPage.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import axios from "axios";

function ProductsPage() {
    
    Aos.init()
    return ( 
        <div className="products-page">
            <Navbar />
            <div className="container-fluid pp-c">
                <div className="title-products" data-aos="fade-up" > 
                    <h1>محصولات گزل شاپ</h1>
                    <span className="absolute-span s1"></span>
                    <span className="absolute-span s2"></span>
                    <span className="absolute-span s3"></span>
                    <span className="absolute-span s4"></span>
                    <span className="absolute-span s5"></span>
                </div>
                <div className="h-p-f">
                <Products/>
                <Filter/>
                </div>
            </div>
        </div>
     );
}

export default ProductsPage;