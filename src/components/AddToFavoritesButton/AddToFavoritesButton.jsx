import { useFavoritesMoviesContext } from "../../context/FavoritesMoviesContext";
import s from "./AddToFavoritesButton.module.css";

const AddToFavoritesButton = ({ movie }) => {

    const { addFavorite, removeFavorite, isFavorite } =
    useFavoritesMoviesContext();


    const favorite = isFavorite(movie.id);


    const onFavoriteClick = () => {
        if (favorite) {
          removeFavorite(movie.id);
        } else {
          addFavorite(movie);
        }
      };

    return (
        <button className={s.addToFavorites} onClick={onFavoriteClick}>
        {favorite ? "★" : "☆"}
      </button>
    );
};

export default AddToFavoritesButton;