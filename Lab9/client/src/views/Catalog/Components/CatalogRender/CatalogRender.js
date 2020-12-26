import React from 'react';

import { ItemCard } from '../ItemCard/ItemCard';


export const CatalogRender = (props) => {
  return (
    <div className="items_container">
      {
        props.items.map((book) => (
          <ItemCard book={book} key={book.id} />
        ))
      }
    </div>
  );
}