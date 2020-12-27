import React from 'react';
import './page_button.css';

export const PageButton = (props) => {
  return (
  <button className={props.className} type="button">{props.title}</button>
  );
}