import { createPortal } from "react-dom";
import { useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import MovieDescription from "../MoviesDescription/MoviesDescription";
import AddToFavoritesButton from "../AddToFavoritesButton/AddToFavoritesButton";
import Modal from "../Modal/Modal";

import s from "./MoviesList.module.css";

const overlaysRoot = document.getElementById("overlays");

const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const onClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {selectedMovie &&
        createPortal(
          <Modal onClick={onClose}>
            <MovieDescription movie={selectedMovie} onClose={onClose} />
          </Modal>,
          overlaysRoot
        )}
      <div className={s.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={s.movieWrapper}>
            <AddToFavoritesButton movie={movie} />
            <MovieCard
              key={movie.id}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
