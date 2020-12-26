import React from 'react';
import { useDispatch } from 'react-redux';

import { removeBook } from '../../../app/actions';
import bookImage from '../../../images/book_card.png';
import trashIco from '../../../images/trash.png';
import './cartItem.css';

export const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='delimiter'>
      <div className='cart_item'>
        <img className='book_media' src={bookImage} />
        <span>{props.book.title}. {props.book.author}</span>
        <span>Price: ${props.book.price}</span>
        <button className='remove_btn' onClick={() => dispatch(removeBook(props.book))}><img src={trashIco} /></button>
      </div>
      <hr />
    </div>
  )
}