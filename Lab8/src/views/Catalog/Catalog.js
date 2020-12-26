import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './catalog.css';
import { FilterBar } from './Components/FilterBar';
import { ItemInfo } from './Components/Item/ItemInfo';
import { ItemCard } from './Components/ItemCard';

export const Catalog = () => {
  const [items] = useState([
    {
      id: "3b756f98-2ad5-4e9c-b31d-817eba866f9c",
      title: "The Muse",
      author: "Jessie Burton",
      description: "A picture hides a thousand words.",
      pages: 110,
      price: 10.30,
    },
    {
      id: "ba4e6353-5d0f-4335-ad28-34f8a5cdac3e",
      title: "From Sand and Ash",
      author: "Amy Harmon",
      description: "Italy, 1943--Germany occupies much of the country, placing the Jewish population in grave danger during World War II.",
      pages: 1024,
      price: 23.12,
    },
    {
      id: "42d4f057-5d0f-4335-ad28-34f8a5cdac3e",
      title: "Before She Knew Him",
      author: "Peter Swanson",
      description: "They had a secret; the two of them; and there was no better way to start a friendship than with a secret.",
      pages: 632,
      price: 100,
    },
    {
      id: "21acb608-8bd8-433e-9766-f37957a07713",
      title: "The World of Throne of Glass",
      author: "Sarah J. Maas",
      description: "No Marketing Blurb.",
      pages: 53,
      price: 5.21,
    },
    {
      id: "1a812431-e45a-4f8b-b6fe-cb8303166c41",
      title: "Slouching Towards Bethlehem",
      author: "Joan Didion",
      description: "The “dazzling” and essential portrayal of 1960s America from the author of South and West and The Year of Magical Thinking",
      pages: 256,
      price: 25.60,
    },
    {
      id: "5dfa82e8-ae62-4cf6-ab9b-56e639135bc1",
      title: "How to Change Your Mind",
      author: "Michael Pollan",
      description: "New York Times Book Review 10 Best Books of 2018.",
      pages: 981,
      price: 98.10,
    },
    {
      id: "98953705-6e44-4161-bb14-34b314e59fe7",
      title: "The Heart of Betrayal",
      author: "Mary E. Pearson",
      description: "The thrilling, New York Times–bestselling sequel to The Kiss of Deception.",
      pages: 120,
      price: 90.19,
    },
  ]);

  const [filteredBooks, setFilteredBooks] = useState(items);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  const match = useRouteMatch();
  
  return (
    <Switch>
      <Route path={`${match.path}/book/:bookId`}>
        <ItemInfo books={items} />
      </Route>
      <Route path={`${match.path}`}>
        <div className="catalog_container">
          <FilterBar
          filterByPrice={(e) => {
            e.preventDefault();

            const lPrice = Number(priceFrom);
            const gPrice = Number(priceTo) ? Number(priceTo) : 10e3;

            if(lPrice > gPrice) {
              alert('Wrong price filters!');
            } else if(isNaN(lPrice) || isNaN(gPrice)) {
              alert('Price filter must be a number');
            } else {
              const filtered = items.filter(item => {
                return item.price >= lPrice && item.price <= gPrice;
              });
              setFilteredBooks(filtered);
            }
          }}

          handleChangePriceTo={(e) => {
            setPriceTo(e.target.value);
          }}

          handleChangePriceFrom={(e) => {
            setPriceFrom(e.target.value);
          }}

          handleChangeSearch={(e) => {
            const filtered = items.filter(item => {
              return(
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                ||
                item.author.toLowerCase().includes(e.target.value.toLowerCase())
              );
            })
            setFilteredBooks(filtered);
          }}/>
          <div className="items_container">
            {
              filteredBooks.map((book) => (
                <ItemCard book={book} key={book.id} />
              ))
            }
          </div>
        </div>
      </Route>
    </Switch>
  );
};