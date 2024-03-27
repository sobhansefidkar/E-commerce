import "./visit.css"
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Visit() {
    Aos.init()
    return ( 
        <div className="visit">
            <div className="visit-info">
                <h2 data-aos="fade-up" data-aos-duration="1000">GUZAL</h2>
                <p>بهترین هارا با ما تجربه کنید</p>
                <Link to={"/"}>
                    بازدید
                </Link>
            </div>
        </div>
     );
}

export default Visit;