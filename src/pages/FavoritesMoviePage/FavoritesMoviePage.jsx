import { useFavoritesMoviesContext } from "../../context/FavoritesMoviesContext";
import MoviesList from "../../components/MoviesList/MoviesList";

import s from "./FavoritesMoviePage.module.css";

const FavoritesMoviePage = () => {
  const { favorites } = useFavoritesMoviesContext();

  return (
    <div className={s.favorites}>
      {favorites.length !== 0 ? (
        <div>
          <MoviesList movies={favorites} />
        </div>
      ) : (
        <div className={s.favoritesEmpty}>
          <h1>No favorites movies yet.</h1>
          <h2>Add movies to your favorites</h2>
        </div>
      )}
    </div>
  );
};

export default FavoritesMoviePage;
