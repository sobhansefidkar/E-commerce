import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "../../context"
import CurrencyFormat from "react-currency-format";
import Tilt from "react-vanilla-tilt";
import "./images.css";
import Aos from "aos";
import "aos/dist/aos.css";


function Images() {
  Aos.init()
    const {data} = useGlobalContext()
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage , data]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className='products-container'>
          {currentItems.map((item) => {
            return (
              // <div key={item.id}>
              //   <img src={item.url} alt="" />
              //   </div>
              <Tilt
                className='mx-auto m-3 border-5'
                key={item.id}
                style={{ border: "none", width: "300px", height: "400px" }}
                data-aos='fade-up'>
                <div className='new-product'>
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
        </div>
        <div className='page'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='بعدی'
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel='قبلی'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageClassName='page-num'
            previousLinkClassName='prev'
            nextLinkClassName='next'
            activeClassName='active'
          />
        </div>
      </>
    );
}

export default Images;