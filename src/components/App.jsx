//import { HomePage } from 'pages/HomePage';
//import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';

import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import React, { lazy, Suspense } from 'react';
import { Loader } from './Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
