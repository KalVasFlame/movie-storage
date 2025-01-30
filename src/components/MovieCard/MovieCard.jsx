import defaultPoster from "../../images/default-poster.avif";
import { useFavoritesMoviesContext } from "../../context/FavoritesMoviesContext";

import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useFavoritesMoviesContext();

  const favorite = isFavorite(movie.id);

  const movieUrl = `https://image.tmdb.org/t/p/w500`;

  const onFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };
  return (
    <div className={s.movieCard}>
      <div className={s.moviePoster}>
        <button className={s.addToFavorites} onClick={onFavoriteClick}>
          {favorite ? "★" : "☆"}
        </button>
        <img
          className={s.movieImage}
          src={movie.poster_path ? movieUrl + movie.poster_path : defaultPoster}
          alt={movie.title}
        />
      </div>
      <p className={s.movieTitle}>{movie.title}</p>
      <p className={s.releaseYear}>{movie.release_date.slice(0, 4)}</p>
    </div>
  );
};

export default MovieCard;
