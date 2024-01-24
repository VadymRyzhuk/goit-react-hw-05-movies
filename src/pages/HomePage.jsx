import React from 'react';
import { useState, useEffect } from 'react';
import { showTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const pStyle = {
  marginLeft: 40,
};
export const HomePage = () => {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState(null);
  //const [error, setError] = useState(null);

  useEffect(() => {
    const showTrending = async () => {
      try {
        setStatus('pending');
        const trending = await showTrendingMovies();
        //const trendName = trending.map(name => name.title || name.name);
        setMovies(trending);
        // console.log(trending); //--------------------------------------------------------------------LOG array 20!!
        setStatus('success');
      } catch (error) {
        //setError(error.message);
        //setStatus('error');
      }
    };

    showTrending();
  }, []);
  return (
    <div>
      <p style={pStyle}>Trending today</p>

      {status === 'success' && <MoviesList movies={movies} />}
    </div>
  );
};
