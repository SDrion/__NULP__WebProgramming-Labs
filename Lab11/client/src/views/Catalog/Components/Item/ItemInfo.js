import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBookById } from '../../../Router/router';
import bookCard from '../../../../images/book_card.png';
import { GoBack } from './GoBack/GoBack';
import { AddToCart } from './AddToCard/AddToCart';
import './itemInfo.css';
import { Loader } from '../Loader/Loader';

export const ItemInfo = () => {
  const { bookId } = useParams();
  const [loader, setLoader] = useState(true);
  const [book, setBook] = useState();

  useEffect(() => {
    (async function () {
      setBook(await getBookById(bookId));
      setLoader(false);
    })()
  }, [])

  return(
    <div className="book_info_container">
      {
        loader ? 
          (<Loader />)
        :
          (
            <div>
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
                <AddToCart book={book} />
              </div>
            </div>
            </div>
          )
      }
    </div>
  )
};