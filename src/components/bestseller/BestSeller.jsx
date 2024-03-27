import "./bestSeller.css";
import { useGlobalContext } from "../../context"
import CurrencyFormat from "react-currency-format";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tilt from "react-vanilla-tilt";
import Aos from "aos";
import "aos/dist/aos.css";


function Bestseller() {
  const {data} = useGlobalContext()
    Aos.init();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='bestseller'>
      <h4 className='title border-bottom border-dark text-black text-center p-2'>
        پرفروش ترین محصولات
      </h4>
      <div
        className='container bestseller-carousel'
        data-aos='fade-up'
        data-aos-duration='1000'>
        <Carousel responsive={responsive} className='w-100 h-100'>
          {data.map((item) => {
            return (
              <Tilt
                className='mx-auto'
                key={item.id}
                style={{ border: "none", width: "300px", height: "400px" }}>
                <div className='bestseller-product'>
                  <div className='img'>
                    <img src={item.image}></img>
                  </div>
                  <div className='title-rate'>
                    <h3>پرینتر خانگی</h3>
                    <div className='rate'>
                      <img src='../images/star.webp'></img>
                      <span>4.6</span>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>
                      پرینتر خانگی غالبا سبک، کوچک و ارزان بوده و از فناوری‌های
                      ساده اما کاربردی برخوردار است.
                    </p>
                  </div>
                  <div className='btn-price'>
                    <button>افزودن به سبد خرید</button>
                    <span>
                      <CurrencyFormat
                        thousandSeparator={true}
                        value={2000000}
                        prefix='تومان'
                        displayType='text'></CurrencyFormat>
                    </span>
                  </div>
                </div>
              </Tilt>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Bestseller;