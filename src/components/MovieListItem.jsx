import React from 'react';

const MovieListItem = ({ movie }) => {
  const title = movie.name || movie.title;
  //console.log(title);  //----------------------------------------------------------------------------------- LOG
  return <li>{title}</li>;
};

export { MovieListItem };
