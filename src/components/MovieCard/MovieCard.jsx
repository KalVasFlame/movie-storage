import defaultPoster from "../../images/default-poster.jpg";

import s from "./MovieCard.module.css";

const MovieCard = ({ movie, setSelectedMovie = () => {} }) => {
  const movieUrl = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className={s.movieCard} onClick={() => setSelectedMovie(movie)}>
      <div className={s.moviePoster}>
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
