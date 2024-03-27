/** @format */
import "./product.css";
import CurrencyFormat from "react-currency-format";
import Icon from "react-icons-kit";
import { heartO } from "react-icons-kit/fa/heartO";
import Aos from "aos";
import "aos/dist/aos.css";

function Product() {
    Aos.init()
  return (
    <div className='container each-pro1'>
      <div className='r-each-pro'>
        <div className='h-img' data-aos='fade-up' data-aos-duration="1000">
          <div className='top-img'>
            <img src='../../images/bg1.jpg' alt='' />
          </div>
          <div className='bottom-img'>
            <div className='e-b-i'>
              <img src='../../images/bg1.jpg' alt='' />
            </div>
            <div className='e-b-i'>
              <img src='../../images/bg1.jpg' alt='' />
            </div>
            <div className='e-b-i'>
              <img src='../../images/bg1.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='l-each-pro'>
        <div className='t-e-p'>
          <h2>اپل مک بوک پرو 16 اینچ M1 pro max</h2>
          <div className='rate-e-p'>
            <span>4.6</span>
            <img src='../../images/star.webp' alt='' />
          </div>
        </div>
        <div className='price-e-p'>
          <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
          <span style={{ fontSize: "15px" }}>موجود در انبار 12</span>
          <button>افزودن به سبد خرید</button>
          <span style={{ fontSize: "15px" }}>
            <Icon icon={heartO}></Icon>
            (افزودن به علاقه مندی ها)
          </span>
        </div>
        <div className='desc-e-p' data-aos='fade-up' data-aos-duration="1000">
          <h3>توضیحات محصول</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className='feature' data-aos='fade-up' data-aos-duration="1000">
          <h3>ویژگی های محصول</h3>
          <ul>
            <li>تمیز کننده منافذ</li>
            <li>شوینده ملایم</li>
            <li>مرطوب کننده پوست</li>
            <li>کنترل چربی اضافه پوست</li>
            <li>مناسب انواع پوست</li>
          </ul>
        </div>
        <div className='specification-e-p' data-aos='fade-up' data-aos-duration="1000">
          <h3>مشخصات محصول</h3>
          <ul>
            <li>
              <span>نوع پوست : </span>
              <span>انواع پوست ها</span>
            </li>
            <li>
              <span>بافت : </span>
              <span> فوم</span>
            </li>
            <li>
              <span>حجم : </span>
              <span>150گرم</span>
            </li>
            <li>
              <span>جنسیت : </span>
              <span>زنانه</span>
            </li>
            <li>
              <span>کشور مبدا : </span>
              <span>فرانسه</span>
            </li>
          </ul>
        </div>
        <div className='instruction' data-aos='fade-up' data-aos-duration="1000">
          <h3>طرز استفاده</h3>
          <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون
          </p>
        </div>
        <div className='combination' data-aos='fade-up' data-aos-duration="1000">
          <h3>ترکیبات</h3>
          <ul>
            <li>تمیز کننده منافذ</li>
            <li>شوینده ملایم</li>
            <li>مرطوب کننده پوست</li>
            <li>کنترل چربی اضافه پوست</li>
            <li>مناسب انواع پوست</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
