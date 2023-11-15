import { CharacterList } from "./components/CharacterList";
import { Route, Routes, Link } from "react-router-dom";

// pages
import FavoritesPage from "./pages/favorites";
import CrudPage from "./pages/crud";

function App() {
  return (
    <div className="bg-dark text-white">
      <header className="container py-3">
        <h1 className="text-center">Rick and Morty</h1>

        <nav className="nav justify-content-center">
          <Link className="nav-link" to="/">
            Characters
          </Link>
          <Link className="nav-link" to="/favorites">
            Favorites
          </Link>
          <Link className="nav-link" to="/crud">
            CRUD
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </div>
  );
}

export default App;
