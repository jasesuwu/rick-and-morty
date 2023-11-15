import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addAndRemoveFavorite = (favorite) => {
    const isFavorite = favorites.find((f) => f.id === favorite.id);
    if (isFavorite) {
      const newFavorites = favorites.filter((f) => f.id !== favorite.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addAndRemoveFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
