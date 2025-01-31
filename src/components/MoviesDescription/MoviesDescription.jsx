import MovieCard from "../MovieCard/MovieCard";
import Button from "../Button/Button";

import s from "./MoviesDescription.module.css";
const MovieDescription = ({ movie, onClose }) => {
  console.log(movie);

  return (
    <div className={s.movieDescription}>
      <MovieCard movie={movie} />
      <div className={s.descriptionContainer}>
        <p className={s.descriptionText}>{movie.overview}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export default MovieDescription;
