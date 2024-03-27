import "./category.css";
import Carousel  from "react-bootstrap/Carousel";
import Tilt from "react-vanilla-tilt";
import Aos from "aos";
import 'aos/dist/aos.css';


function Category() {
    Aos.init()
    const data = [
      { id: 1, image: "../../images/bg1.jpg" },
      { id: 2, image: "../../images/bg2.jpg" },
      { id: 3, image: "../../images/bg3.jpg" },
      { id: 4, image: "../../images/bg1.webp" },
    ];
    return (
      <div className='category-css'>
        <div className='container cat-container'>
          <div className='r-cat'>
            {data.map((item) => {
              return (
                  <Tilt style={{border : "none" , boxShadow :"none"}} className="static-cat" key={item.id} data-aos="fade-left" data-aos-duration="1000">
                      <img src={item.image} alt="" />
                  </Tilt>
              );
            })}
          </div>
          <div className='l-cat'>
            <Carousel className='w-100 h-100' data-aos="fade-right" data-aos-duration="1000">
              {data.map((item) => {
                return (
                  <Carousel.Item interval={3000} key={item.id}>
                    <img
                    className="image-crousel"
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                      src={item.image}
                      alt=''
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
}

export default Category;