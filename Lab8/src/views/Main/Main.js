import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from './Card';
import './main.css';

export const Main = () => {
  const [paragraphs, setParagraphs] = useState([
    "Tile heading",
    "Tile heading",
    "Tile heading",
  ]);

  return (
    <div className="main">
      <Card className="main_card" title="Heading"/>
      <div className="bottom_cards">
        { paragraphs.map((title) => (
          <Card className="bottom_card" title={title} key={Math.random()} />
        )) }
      </div>
      {
        paragraphs.length > 10 ? 
        (<Link to='/catalog'>
          <button className="view_more_btn">Go To Catalog</button>
        </Link>)
        :
        (<button onClick={() => {
          const joined = paragraphs.concat(paragraphs.slice(-3));
          setParagraphs(joined);
          }} className="view_more_btn">View More</button>)
        }
    </div>
  );
};