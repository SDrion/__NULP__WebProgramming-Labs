import React from 'react';

import { PageButton } from './PageButton';
import shopLogo from '../../images/logo.png';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <img alt="logo" src={shopLogo}/>
      <div className="navbar">
      <PageButton title="Home" className="page_button active" />
      <PageButton title="Catalog" className="page_button" />
      <PageButton title="Cart" className="page_button" />
      </div>
    </div>
  );
};