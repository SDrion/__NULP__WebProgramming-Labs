import React from 'react';

import './filterBar.css';

export const FilterBar = (props) => {
  return (
    <div className="filter_bar">
      <form>
        <span>Price: </span>
        <input className="price" type="text" placeholder="Price from" onChange={props.handleChangePriceFrom} />
        <span> &#9472; </span>
        <input className="price" type="text" placeholder="Price to" onChange={props.handleChangePriceTo} />
        <button className="submit_button" onClick={props.filterByPrice}>Submit</button>
        <button className="remove_button">Remove Filter</button>
      </form>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={props.handleChangeSearch} />
      </div>
    </div>
  );
};