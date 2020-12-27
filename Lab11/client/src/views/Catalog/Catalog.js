import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './catalog.css';
import { FilterBar } from './Components/FilterBar/FilterBar';
import { ItemInfo } from './Components/Item/ItemInfo';
import { CatalogRender } from './Components/CatalogRender/CatalogRender';
import { Loader } from './Components/Loader/Loader';

import {
  getAllBooks,
  filterBooksByPrice,
  searchBook,
} from '../Router/router';

export const Catalog = () => {
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [loader, setLoader] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    (async function () {
      setFilteredBooks(await getAllBooks());
      setLoader(false);
    })()
  }, [])

  return (
    <Switch>
      <Route path={`${match.path}/book/:bookId`}>
        <ItemInfo books={filteredBooks} />
      </Route>
      <Route path={`${match.path}`}>
        <div className="catalog_container">
          <FilterBar
            filterByPrice={async (e) => {
              e.preventDefault();

              const lPrice = Number(priceFrom);
              let gPrice = Number(priceTo);

              if (lPrice > gPrice) {
                alert('Wrong price filters!');
              } else if (isNaN(lPrice) || isNaN(gPrice)) {
                alert('Price filter must be a number');
              } else {
                gPrice = Number(priceTo) ? Number(priceTo) : 10e3;
                setLoader(true);
                const filtered = await filterBooksByPrice(lPrice, gPrice);
                setFilteredBooks(filtered);
                setLoader(false);
              }
            }}

            handleChangePriceTo={(e) => {
              setPriceTo(e.target.value);
            }}

            handleChangePriceFrom={(e) => {
              setPriceFrom(e.target.value);
            }}

            handleChangeSearch={async (e) => {
              let filtered;
              if (e.target.value === '') {
                setLoader(true);
                filtered = await getAllBooks();
              } else {
                setLoader(true);
                filtered = await searchBook(e.target.value);
              }
              setFilteredBooks(filtered);
              setLoader(false);
            }}
          />
          {
            loader ? (
              <Loader />
            ) : (
                <CatalogRender items={filteredBooks} />
              )
          }
        </div>
      </Route>
    </Switch>
  );
};