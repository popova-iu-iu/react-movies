import React from "react";

export const Movie = (props) => {
  const {
    Poster: poster,
    Title: title,
    Type: type,
    Year: year,
    imdbID: id,
  } = props;

  return (
    <div id={id} className="card">
      <div className="card__image">
        <img src={poster} alt="poster" />
      </div>
      <div className="card__info">
        <p className="card__titile">{title}</p>
        <p className="card__year">
          {year} <span className="card__type">{type}</span>
        </p>
      </div>
    </div>
  );
};
