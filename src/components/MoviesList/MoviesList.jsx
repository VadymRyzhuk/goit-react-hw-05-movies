import React from 'react';
import { MovieListItem } from '../MovieListItem';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  //console.log(movies);  //----------------------------------------------------------------------------------- LOG
  return (
    <div>
      <ul className={css.list}>
        {Array.isArray(movies) &&
          movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
};
