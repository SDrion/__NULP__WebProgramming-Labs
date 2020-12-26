import React from 'react';

import bookCard from '../../../images/book_card.png';
import { ViewMoreButton } from './ViewMoreButton';
import './itemCard.css';

export const ItemCard = (props) => {
  return (
    <div className="item_card">
      <img src={bookCard} alt="book card"/>
      <div className="book_desc_container">
        <span className="book_title">{props.title}</span>
        <span className="book_description">{props.description}</span>
        <span className="book_price">Price: {props.price}</span>
      </div>
      <ViewMoreButton />
    </div>
  );
};