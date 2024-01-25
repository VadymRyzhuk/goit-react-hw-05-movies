import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovieByQuery } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  //console.log(query); // ------------------------------------------------------------------------------------------ LOG
  // const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState(null);
  // const [error, setError] = useState(null);
  const formStyle = {
    marginLeft: 20,
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.searchInput.value;
    //console.log(searchValue); // ------------------------------------------------------------------------------------------ LOG
    //setSearchTerm(searchValue);
    setSearchParams({
      query: searchValue,
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query.trim() === '') {
          return;
        }
        setStatus('pending');
        const findMovies = await searchMovieByQuery(query);
        setMovies(findMovies);
        //console.log(findMovies); //--------------------------------------------------------------------LOG array 20!!
        setStatus('success');
      } catch (error) {
        //setError(error.message);
        //setStatus('error');
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchInput"
          required
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>
      {/* {status === 'error' && 'Oops, some error occured...'} */}
      {status === 'success' && (
        <div>
          {movies.length > 0 ? (
            <MoviesList movies={movies} />
          ) : (
            `No movies foond!`
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
