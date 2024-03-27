function SignIn() {
    return (
      <div className='register'>
        <div className='container register-container'>
          <form className='register-box'>
            <h3>ورود حساب</h3>
            <div className='username-r r'>
              <label htmlFor=''>نام کاربری</label>
              <input type='text' placeholder='sobhan' />
            </div>
            <div className='pass-r r'>
              <label htmlFor=''>رمز</label>
              <input type='text' placeholder='123456' />
            </div>
            <span className=" text-decoration-underline" style={{cursor : "pointer" , marginTop : "-30px"}}>فراموشی رمز ورود</span>
            <span className=" text-decoration-underline" style={{cursor : "pointer" , marginTop : "-30px"}}>ثبت نام</span>
            <button>ورود</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  