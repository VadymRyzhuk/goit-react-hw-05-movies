import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css';

import React from 'react';
import { MoviesPage } from 'pages/MoviesPage';
export const App = () => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
          to="/movies"
          end
        >
          Movies
        </NavLink>
      </header>
      <br />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
};
