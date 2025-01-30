import { useState } from "react";

import { searchMovies } from "../../services/api";

import Loading from "../Loading/Loading";

import s from "./SearchForm.module.css";

const SearchForm = ({ setMovies }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const movies = await searchMovies(searchQuery);
      setMovies(movies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading text="Searching ..." />
      ) : (
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={s.searchButton} type="submit">Search</button>
          {error && <p>{error.message}</p>}
        </form>
      )}
    </>
  );
};

export default SearchForm;
