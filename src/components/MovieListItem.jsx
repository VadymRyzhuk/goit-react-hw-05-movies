import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieListItem = ({ movie }) => {
  const location = useLocation();

  const title = movie.name || movie.title;

  return (
    <li>
      <Link state={{ from: location }} to={`/movies/${movie.id}`}>
        {title}
      </Link>
    </li>
  );
};

export { MovieListItem };
