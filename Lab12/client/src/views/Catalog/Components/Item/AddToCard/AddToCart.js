import React from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../../../../../app/actions';
import './addToCart.css';

export const AddToCart = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="add_to_cart_btn" onClick={() => dispatch(addBook(props.book))}>Add To Cart</button>
  );
};