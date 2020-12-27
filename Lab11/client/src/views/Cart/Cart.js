import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import './cart.css';

import { CartItem } from './CartItem/CartItem';
import { CartRouteBtn } from './CartRoutes/CartRouteBtn';

export const Cart = () => {
  const match = useRouteMatch();
  const cartItems = useSelector(state => state);
  const [totalPrice, setTotalPrice] = useState(0);
  const reducer = (accumulator, currentValue) => accumulator + Number(currentValue.price);

  useEffect(() => {
    setTotalPrice(cartItems.reduce(reducer, 0))
  }, [cartItems]);

  return (
    <div>
      <div className='cart_container'>
        {
          (cartItems.length === 0) ?
            <span className='empty_cart_text'>Your cart is empty...</span> :
            <div className='items_wrapper'>
              {cartItems.map(book => {
                return (
                  <CartItem book={book} key={book.id} />
                )
              })}
              <span className='total_price'>Total price: ${totalPrice.toFixed(2)}</span>
            </div>
        }
      </div>
      <div className="bottom_nav_buttons">
        <Link to={"/catalog"} className="catalog_btn_wraper">
          <CartRouteBtn class="go_to_catalog route_btn" title="Back to Catalog" />
        </Link>
        {cartItems.length === 0 ? false : (
          <Link to={`${match.path}/checkout`} className="checkout_btn_wrapper">
            <CartRouteBtn class="checkout route_btn" title="Checkout" />
          </Link>
        )}
      </div>
    </div>
  );
}