import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../api/tmdb';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import Navbar from '../components/Navbar'; 
import { Container, Box, Typography } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    query ? handleSearch(query) : fetchTrending();
  }, [query]);

  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      setQuery(lastSearch);
    }
  }, []);

  const fetchTrending = async () => {
    const { data } = await fetchTrendingMovies();
    setMovies(data.results);
  };

  const handleSearch = async (q) => {
    setQuery(q);
    if (!q) return fetchTrending();
    const { data } = await searchMovies(q);
    setMovies(data.results);
    localStorage.setItem('lastSearch', q);
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Movie Explorer
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Discover trending movies or search for your favorite ones
          </Typography>
        </Box>
        <SearchBar onSearch={handleSearch} />
        <MovieGrid movies={movies} />
      </Container>
    </div>
  );
};

export default Home;
