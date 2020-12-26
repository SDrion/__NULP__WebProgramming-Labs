import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import bookCard from '../../../../images/book_card.png';
import { GoBack } from './GoBack';
import { AddToCart } from './AddToCart';
import './itemInfo.css'

export const ItemInfo = (props) => {
  const { bookId } = useParams();
  const [book] = useState(props.books.find(book => book.id === bookId));

  return(
    <div className="book_info_container">
      <div className="main">
        <img src={bookCard} alt="book" />
        <div className="info">
          <span className="title">{book.title}</span>
          <span className="description">{book.description}</span>
          <div className="details">
            <span className="author">Author: {book.author}</span>
            <span className="pages">Number of pages: {book.pages}</span>
          </div>
        </div>
      </div>
      <div className="bottom_block">
        <span className="price">Price: ${book.price}</span>
        <div className="buttons_block">
          <GoBack />
          <AddToCart />
        </div>
      </div>
    </div>
  )
};