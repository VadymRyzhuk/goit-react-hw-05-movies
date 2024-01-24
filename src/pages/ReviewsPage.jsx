import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { showMovieReview } from 'services/api';

export const ReviewsPage = () => {
  const styleUl = {
    listStyle: 'none',
  };
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieReview, setMovieReview] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const showMovieReviewById = async () => {
      try {
        setStatus('pending');
        const movieData = await showMovieReview(movieId);
        setMovieReview(movieData);
        // console.log(movieData); //--------------------------------------------------------------------LOG array 20!!

        setStatus('success');
      } catch (error) {
        setError(error.message);
        setStatus('error');
      }
    };

    showMovieReviewById();
  }, [movieId]);
  return (
    <div>
      {status === 'error' && <p>{`Error: ${error}`}</p>}
      {movieReview?.length === 0 && (
        <p>We don’t have any reviews for this movie.</p>
      )}
      {status === 'success' && (
        <ul style={styleUl}>
          {movieReview.map(item => (
            <li key={item.id}>
              <div>
                <h5>Author: {item.author}</h5>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
