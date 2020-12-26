import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const ViewMoreButton = (props) => {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/book/${props.book.id}`}>
      <button className="view_more_btn" type="button">
        View More
      </button>
    </Link>
  );
};