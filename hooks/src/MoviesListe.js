import React from 'react';
import Movie from './Movie';

const MoviesListe = ({ movies }) => {
  return (
    <div>
      <div className="row">
        {movies.map((movie, i) => (
          <div className='col-md-3 col-sm-12 my-3' key={i}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesListe;
