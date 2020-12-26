import React from 'react';

import { Card } from './Card';
import './main.css';

export const Main = () => {
  return (
    <div className="main">
      <Card className="main_card" title="Heading"/>
      <div className="bottom_cards">
        <Card className="bottom_card" title="Tile heading 1"/>
        <Card className="bottom_card" title="Tile heading 2"/>
        <Card className="bottom_card" title="Tile heading 3"/>
      </div>
      <button className="view_more_btn">View More</button>
    </div>
  );
};