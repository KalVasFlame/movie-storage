import { useFavoritesMoviesContext } from "../../context/FavoritesMoviesContext";
import MoviesList from "../../components/MoviesList/MoviesList";


const FavoritesMoviePage = () => {
  const { favorites } = useFavoritesMoviesContext();

  return (
    <div>
      {favorites.length !== 0 ? (
        <div>
          <MoviesList movies={favorites} />
        </div>
      ) : (
        <div>
          <h1>No favorites movies yet.</h1>
        </div>
      )}
    </div>
  );
};

export default FavoritesMoviePage;
