/** @format */

import "./productsInCart.css";
import CurrencyFormat from "react-currency-format";

function ProductsInCart() {
  return (
    <div className='products-in-cart'>
      <div className="x">
      <div className='total-prices'>
        <span>قیمت کالا ها</span>
        <CurrencyFormat
          thousandSeparator={true}
          value={2000000}
          prefix='تومان'
          displayType='text'></CurrencyFormat>
      </div>
      <div className='items'>
        <div className='item'>
          <span>کرم پودر مک Studio Fix SPF15 حجم 30 میل</span>
          <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
        </div>
        <div className='item'>
          <span>ریمل جدا کننده و بلند کننده صورتی اسنس</span>
          <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
        </div>
        <div className='item'>
          <span>ریمل جدا کننده و بلند کننده صورتی اسنس</span>
          <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
        </div>
      </div>
      <div className="off-price">
        <span>سود شما از این خرید</span>
        <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
      </div>
      <div className="total-cart">
        <span>جمع سبد خرید</span>
        <CurrencyFormat
            thousandSeparator={true}
            value={2000000}
            prefix='تومان'
            displayType='text'></CurrencyFormat>
      </div>
      <button className="continue">ادامه فرآینده خرید</button>
      </div>
    </div>
  );
}

export default ProductsInCart;
