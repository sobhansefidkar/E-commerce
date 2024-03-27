/** @format */

import { useState } from "react";
import "./comment.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Icon from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

function Comment() {
  Aos.init();
  const [price, setPrice] = useState();
  return (
    <div className='comment'>
      <div className='container comment-container'>
        <div className='r-comment'>
          <div className='h-r-c' data-aos='fade-up' data-aos-duration='1000'>
            <h3>دیدگاه</h3>
            <div className='price-t-value'>
              <span>قیمت نسبت به کیفیت :</span>
              <div className='range'>
                <span>ضعیف</span>
                <input
                  type='range'
                  min={0}
                  max={5}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span>عالی</span>
              </div>
            </div>
            <div className='price-t-value'>
              <span>کیفیت محصول :</span>
              <div className='range'>
                <span>ضعیف</span>
                <input
                  type='range'
                  min={0}
                  max={5}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span>عالی</span>
              </div>
            </div>
            <div className='c-c'>
              <div className='name-c'>
                <span>اسم : </span>
                <input type='text' placeholder='سبحان' />
              </div>
              <div className='name-c'>
                <span>ایمیل : </span>
                <input type='text' placeholder='sobhan83@gmail.com' />
              </div>
              <div className='name-c'>
                <span>نظر : </span>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='5'
                  placeholder='توصیه...'
                  style={{ marginBottom: "10px" }}></textarea>
              </div>
            </div>
            <button className='submit'>ثبت نظر</button>
          </div>
        </div>
        <div className='l-comment'>
          <h3>دیدگاه خریداران</h3>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div
            className='people-comment'
            data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
          <div className='people-comment'data-aos='fade-up'
            data-aos-duration='1000'>
            <div className='name-person'>
              <span className='bedge'>
                4 <Icon icon={star} />
              </span>
              <span>سبحان</span>
              <span style={{ color: "gray" }}>1383/12/23</span>
            </div>
            <div className='text-person'>
              <p>هنوز استفاده نکردم ولی میدونم که خوبه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
