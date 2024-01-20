// import React from 'react';
// import { useState, useEffect } from 'react';
// import { searchMovieByQuery } from 'services/api';
// import { MoviesList } from './MoviesList';

// export const Movies = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [status, setStatus] = useState('idle');
//   const [movies, setMovies] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = event => {
//     event.preventDefault();
//     const searchValue = event.currentTarget.searchInput.value;
//     //console.log(searchValue); // ------------------------------------------------------------------------------------------ LOG
//     setSearchTerm(searchValue);
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         if (searchTerm.trim() === '') {
//           return;
//         }
//         setStatus('pending');
//         const findMovies = await searchMovieByQuery(searchTerm);
//         setMovies(findMovies);
//         console.log(findMovies); //--------------------------------------------------------------------LOG array 20!!
//         setStatus('success');
//       } catch (error) {
//         setError(error.message);
//         //setStatus('error');
//       }
//     };

//     fetchMovies();
//   }, [searchTerm]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           name="searchInput"
//           required
//         />
//         <button type="submit">Search</button>
//       </form>

//       {status === 'success' && (
//         <div>
//           {movies.length > 0 ? <MoviesList movies={movies} /> : <NoImages />}
//         </div>
//       )}
//     </div>
//   );
// };
