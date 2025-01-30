import { createContext, useState, useEffect, useContext } from "react";

const FavoritesMoviesContext = createContext();

export const useFavoritesMoviesContext = () =>
  useContext(FavoritesMoviesContext);

export const FavoritesMoviesProvider = ({ children }) => {
  const checkFavoritesList = () =>
    JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavorites] = useState(checkFavoritesList());

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id) => favorites.some((movie) => movie.id === id);

  return (
    <FavoritesMoviesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesMoviesContext.Provider>
  );
};
