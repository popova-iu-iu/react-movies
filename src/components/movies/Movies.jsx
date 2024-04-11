import React from "react";
import { Movie } from "../movie/Movie";

const KEY = "e0cb1fd0";

export const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.id} {...movie} />)
      ) : (
        <h4>Not found</h4>
      )}
    </div>
  );
};
