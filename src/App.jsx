import HomePage from "./pages/HomePage/HomePage";
import FavoritesMoviePage from "./pages/FavoritesMoviePage/FavoritesMoviePage";
import NavBar from "./components/NavBar/NavBar";
import { FavoritesMoviesProvider } from "./context/FavoritesMoviesContext";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <FavoritesMoviesProvider>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesMoviePage />} />
        </Routes>
      </main>
    </FavoritesMoviesProvider>
  );
}

export default App;
