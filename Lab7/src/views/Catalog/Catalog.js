import React from 'react';

import './catalog.css';
import { FilterBar } from './Components/FilterBar';
import { ItemCard } from './Components/ItemCard';

export const Catalog = () => {
  const items = [
    {
      title: "Book 1",
      description: "Sunt ipsum nisi enim consectetur sit minim.",
      price: 10.30,
    },
    {
      title: "Book 2",
      description: "Eiusmod veniam laboris sint aute do excepteur occaecat.",
      price: 20,
    },
    {
      title: "Book 3",
      description: "Excepteur elit incididunt nostrud duis esse dolore ipsum cupidatat occaecat.",
      price: 30.45,
    },
    {
      title: "Book 4",
      description: "Amet nisi ad commodo dolor sunt culpa dolor dolor quis nulla ad ad anim.",
      price: 120.99,
    },
    {
      title: "Book 5",
      description: "Tempor cupidatat tempor occaecat et eu qui.",
      price: 8.50,
    }
  ];
  return (
    <div className="catalog_container">
      <FilterBar />
      <div className="items_container">
        {
          items.map(book => (
            <ItemCard title={book.title} description={book.description} price={book.price} />
          ))
        }
      </div>
    </div>
  );
};