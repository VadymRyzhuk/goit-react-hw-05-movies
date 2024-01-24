import React from 'react';
export const defaultImage =
  'https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png';
export const CastListItem = ({ movieCast }) => {
  // console.log(movieCast[0].profile_path);
  return (
    <li>
      {movieCast.map(castChar => (
        <div key={castChar.id}>
          <img
            src={
              castChar.profile_path
                ? `https://image.tmdb.org/t/p/w300/${castChar.profile_path}`
                : defaultImage
            }
            alt={castChar.name}
            width={100}
            height={120}
          />
          <p>{castChar.name}</p>
          <p>{castChar.character}</p>
        </div>
      ))}
    </li>
  );
};
