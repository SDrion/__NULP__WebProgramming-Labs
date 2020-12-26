import React from 'react';
import { useHistory } from 'react-router-dom';

import './goBack.css';

export const GoBack = () => {
  const history = useHistory();
  return (
    <button onClick={() => { history.goBack(); }} className="go_back_btn">Go Back</button>
  );
};