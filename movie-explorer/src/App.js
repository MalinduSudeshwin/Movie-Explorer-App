import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from './components/MovieDetails';
import { MovieProvider } from './context/MovieContext';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/favorites" element={isLoggedIn ? <Favorites /> : <Navigate to="/login" />} />
          <Route path="/movie/:id" element={isLoggedIn ? <MovieDetails /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};

export default App;
