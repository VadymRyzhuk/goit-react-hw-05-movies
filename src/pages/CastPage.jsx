import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { showMovieCast } from 'services/api';
import { CastList } from 'components/CastList/CastList';

export const CastPage = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieCast, setMovieCast] = useState(null);
  //const [error, setError] = useState(null);

  useEffect(() => {
    const showMovieCastById = async () => {
      try {
        setStatus('pending');
        const movieData = await showMovieCast(movieId);
        setMovieCast(movieData);
        //console.log(movieData[0]); //--------------------------------------------------------------------LOG array 20!!

        setStatus('success');
      } catch (error) {
        // setError(error.message);
        //setStatus('error');
      }
    };

    showMovieCastById();
  }, [movieId]);
  return (
    <div>{status === 'success' && <CastList movieCast={movieCast} />}</div>
  );
};
