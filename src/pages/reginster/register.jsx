/** @format */

import "./register.css";

function Register() {
  let index = 1;
  const spans = [
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
    { id: index++ },
  ];
  return (
    <div className='register'>
      <div className='container-fluid register-container'>
        <form className='register-box'>
          <h3>ساخت حساب</h3>
          <div className='name-r r'>
            <label htmlFor=''>اسم</label>
            <input type='text' placeholder='سبحان' />
          </div>
          <div className='lastname-r r'>
            <label htmlFor=''>فامیل</label>
            <input type='text' placeholder='سفیدکار' />
          </div>
          <div className='username-r r'>
            <label htmlFor=''>نام کاربری</label>
            <input type='text' placeholder='sobhan' />
          </div>
          <div className='email-r r'>
            <label htmlFor=''>ایمیل</label>
            <input type='text' placeholder='sss@gmail.com' />
          </div>
          <div className='pass-r r'>
            <label htmlFor=''>رمز</label>
            <input type='text' placeholder='123456' />
          </div>
          <div className='confirm-r r'>
            <label htmlFor=''>تایید رمز</label>
            <input type='text' placeholder='123456' />
          </div>
          <button>ثبت نام</button>
        </form>
        {spans.map((span) => {
          return <span className='span' key={span.id}></span>;
        })}
      </div>
    </div>
  );
}

export default Register;
