import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { getPopularMovies } from "../../services/api";

import Loading from "../../components/Loading/Loading";
import SearchForm from "../../components/SearchFrom/SearchForm";
import MoviesList from "../../components/MoviesList/MoviesList";
import Modal from "../../components/Modal/Modal";

const overlaysRoot = document.getElementById("overlays");

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
        createPortal(
          <Modal>
            <Loading text="Loading Popular Movies" />
          </Modal>,
          overlaysRoot
        )
      ) : (
        <MoviesList movies={movies} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default HomePage;
