import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './success.css';
import success from '../../images/success.svg';
import { deleteAll } from '../../app/actions';

export const Success = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(deleteAll())
  }) ();

  return (
    <div className="success_container">
      <img src={success} alt="success" />
      <span>Your order was sent to processing!</span>
      <Link to={'/catalog'}>
        <button className='catalog_btn'>Go to catalog</button>
      </Link>
    </div>
  )
}