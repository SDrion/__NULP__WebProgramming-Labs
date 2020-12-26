import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './cart.css';
import { CartItem } from './CartItem/CartItem';

export const Cart = () => {
  const cartItems = useSelector(state => state);
  const [totalPrice, setTotalPrice] = useState(0);
  const reducer = (accumulator, currentValue) => accumulator + Number(currentValue.price);

  useEffect(() => {
    setTotalPrice(cartItems.reduce(reducer, 0))
  }, [cartItems]);

  return (
    <div className='cart_container'>
      {
        (cartItems.length === 0) ?
          <span className='empty_cart_text'>Your cart is empty...</span> :
          <div className='items_wrapper'>
            {cartItems.map(book => {
              return (
                <CartItem book={book} />
              )
            })}
            <span className='total_price'>Total price: ${totalPrice.toFixed(2)}</span>
          </div>
      }
    </div>
  );
}