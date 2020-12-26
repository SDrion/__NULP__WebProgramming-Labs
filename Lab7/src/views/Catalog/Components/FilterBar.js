import React from 'react';

import './filterBar.css';

export const FilterBar = () => {
  return (
    <div className="filter_bar">
      <form>
        <span>Price: </span>
        <input className="price" type="text" placeholder="Price from" />
        <span> &#9472; </span>
        <input className="price" type="text" placeholder="Price to" />
        <button className="submit_button">Submit</button>
      </form>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="search_button">Search</button>
      </div>
    </div>
  );
};