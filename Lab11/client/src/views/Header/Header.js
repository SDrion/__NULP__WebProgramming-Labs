import React from 'react';
import { Link } from 'react-router-dom';

import { PageButton } from './PageButton';
import shopLogo from '../../images/logo.png';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img alt="logo" src={shopLogo}/>
      </Link>
      <div className="navbar">
      <Link to={"/"}>
        <PageButton title="Home" className="page_button"/>
      </Link>
      <Link to={"/catalog"}>
        <PageButton title="Catalog" className="page_button" />
      </Link>
      <Link to={"/cart"}>
        <PageButton title="Cart" className="page_button" />
      </Link>
      </div>
    </div>
  );
};