import React from 'react';

import bookCard from '../../images/book.png';

export const Card = (props) => {
  return (
    <div className={props.className}>
      <img src={bookCard} alt="book card image"/>
      <div className="book_card_text">
        <span>{props.title}</span>
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </span>
      </div>
    </div>
  );
}