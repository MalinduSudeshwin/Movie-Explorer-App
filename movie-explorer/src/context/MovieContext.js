import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const exists = favorites.find((m) => m.id === movie.id);
    setFavorites(exists ? favorites.filter((m) => m.id !== movie.id) : [...favorites, movie]);
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, themeMode, setThemeMode }}>
      {children}
    </MovieContext.Provider>
  );
};
