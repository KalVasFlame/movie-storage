import MovieCard from "../MovieCard/MovieCard";
import Button from "../Button/Button";

import s from "./MoviesDescription.module.css";
const MovieDescription = ({ movie, onClose }) => {
  return (
    <div className={s.movieDescription}>
      <div className={s.descriptionContainer}>
      <MovieCard movie={movie} />
        <p className={s.descriptionText}>{movie.overview}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export default MovieDescription;
