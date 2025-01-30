import MovieCard from "../MovieCard/MovieCard";

import s from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <>
      <div className={s.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
