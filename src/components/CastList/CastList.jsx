import React from 'react';
import { CastListItem } from 'components/CastListItem/CastListItem';

export const CastList = ({ movieCast }) => {
  return (
    <ul>
      {Array.isArray(movieCast) &&
        movieCast.map(character => (
          <CastListItem key={character.id} movieCast={movieCast} />
        ))}
    </ul>
  );
};
