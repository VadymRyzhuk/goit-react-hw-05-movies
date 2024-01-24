import React, { useRef, useState, useEffect } from 'react';
import { showMovieDetails } from 'services/api';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import { CastPage } from 'pages/CastPage';
import { ReviewsPage } from 'pages/ReviewsPage';
import css from './MovieDetailsPage.module.css';

export const defaultImage =
  'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png';

export const MovieDetailsPage = () => {
  const buttonStyle = {
    marginLeft: 20,
  };
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  //console.log(movieId);

  const [status, setStatus] = useState('idle');
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const showMovieDetailsById = async () => {
      try {
        setStatus('pending');
        const movieData = await showMovieDetails(movieId);
        setMovieDetails(movieData);
        //console.log(movieData); //--------------------------------------------------------------------LOG array 20!!
        setStatus('success');
      } catch (error) {
        setError(error.message);
        setStatus('error');
      }
    };

    showMovieDetailsById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>
        <button style={buttonStyle} type="button">
          Go back
        </button>
      </Link>
      {status === 'error' && <ErrorMessage error={error} />}
      {status === 'success' && (
        <div className={css.postWrap}>
          <div>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImage
              }
              alt={movieDetails.title}
              width={280}
              height={370}
            />
            <br />
            <br />
          </div>

          <div>
            <h1>{movieDetails.title}</h1>
            <p>User score: {Math.round(movieDetails.vote_average * 10)} % </p>
            <h2>Overview</h2>
            <p className={css.text}>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join('  ')}</p>
          </div>
        </div>
      )}
      {status === 'success' && (
        <div>
          <h4 className={css.addInfo}>Additional information:</h4>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <div>
            <Routes>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};
