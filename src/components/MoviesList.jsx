import React from 'react';
import { MovieListItem } from './MovieListItem';

export const MoviesList = ({ movies }) => {
  //console.log(movies);  //----------------------------------------------------------------------------------- LOG
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </ul>
  );
};
