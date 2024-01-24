import React from 'react';
import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  //console.log(error);
  return (
    <div className={css.error}>
      <p className={css.messageErrorP}>
        Sorry, we don’t heve any info about this movie :(
        {/* {error} */}
      </p>
    </div>
  );
};
