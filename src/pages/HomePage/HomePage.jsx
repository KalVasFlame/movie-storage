import { useState, useEffect } from "react";
import { getPopularMovies } from "../../services/api";

import Loading from "../../components/Loading/Loading";
import SearchForm from "../../components/SearchFrom/SearchForm";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
    <SearchForm setMovies={setMovies} />
      {loading ? (
        <Loading text="Loading Popular Movies" />
      ) : (
        <MoviesList movies={movies} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default HomePage;
