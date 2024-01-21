import { HomePage } from 'pages/HomePage';

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
        >
          Movies
        </NavLink>
      </header>
      <br />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
      {/* <HomePage /> */}
      <br />
    </div>
  );
};
