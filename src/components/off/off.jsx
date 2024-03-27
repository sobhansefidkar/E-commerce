import Countdown from "react-countdown" 
import "./off.css";
import Tilt from "react-vanilla-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyFormat from "react-currency-format";
import { useGlobalContext } from "../../context"




function Off() {
  const {data} = useGlobalContext()
  console.log(data)
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return "جشنواره به پایان یافت";
        } else {
          return (
            <div className='festival-timer'>
              <span>{days}</span>
              <span>{hours}</span>
              <span>{minutes}</span>
              <span>{seconds}</span>
            </div>
          );
        }
      };
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
      const filter = data.filter((item) => item.festival == true);
    Aos.init()
      return (
        <div className='festival'>
          <h2>جشنواره</h2>
          <div className='container festival-container'>
            <div className='festival-info'>
              <div className='info' data-aos="fade-up" data-aos-duration="1000">
                <h2>جشنواره تابستانه</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                  ستون و سطرآنچنان که لازم است
                </p>
                <Countdown
                  autoStart={true}
                  date={Date.now() + 1000000000}
                  renderer={renderer}
                />
              </div>
              <div className='image-info'>
                <img src='../images/festival-bg.png' alt='' data-aos="fade-up" data-aos-duration="1000"/>
              </div>
            </div>
            <div className='festival-products'  data-aos="fade-up" data-aos-duration="1000">
              <Carousel className=' h-100 w-100' responsive={responsive}>
                {filter.map((item) => (
                  <Tilt style={{border : "none"}} className="w-75 mx-auto" key={item.id}>
                    <div
                      className='festival-product p-3 w-100 mx-auto rounded-3 d-flex align-items-center text-black  '>
                      <div className='fes-img'>
                        <img className='w-100 mx-auto' src={item.image} alt='' />
                      </div>
                      <div className='fes-info'>
                        <p className=' d-flex justify-content-center'>
                          {item.name}
                        </p>
                        <p className=' d-flex flex-column justify-content-center align-items-center'>
                          <span className=' text-decoration-line-through form-control-sm'>
                            <CurrencyFormat
                              thousandSeparator={true}
                              value={item.price}
                              prefix='تومان'
                              displayType='text'></CurrencyFormat>
                          </span>
                          <CurrencyFormat
                            thousandSeparator={true}
                            value={item.price * 0.8}
                            prefix='تومان'
                            displayType='text'></CurrencyFormat>
                        </p>
                        <p>{item.code}</p>
                        <button className=' rounded-3 btn-fes w-100 border-0 text-white d-flex justify-content-center'>
                          مشاهده
                        </button>
                      </div>
                    </div>
                  </Tilt>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      );
}

export default Off;