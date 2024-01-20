import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';

import React from 'react';
export const App = () => {
  return (
    <div>
      <p>Home</p>
      <p>Movies</p>
      <br />

      <HomePage />
      <br />
      {/* <MoviesPage /> */}
    </div>
  );
};
