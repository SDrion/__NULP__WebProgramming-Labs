import React from 'react';

import bookCard from '../../../../images/book_card.png';
import { ViewMoreButton } from '../ViewMoreButton/ViewMoreButton';
import './itemCard.css';

export const ItemCard = (props) => {
  return (
    <div id={props.id} className="item_card">
      <img src={bookCard} alt="book card"/>
      <div className="book_desc_container">
        <span className="book_title">{props.book.title}</span>
        <span className="book_author">Author: {props.book.author}</span>
        <span className="book_pages">Number of pages: {props.book.pages}</span>
        <span className="book_price">Price: ${props.book.price}</span>
      </div>
      <ViewMoreButton book={props.book} />
    </div>
  );
};