import React from 'react';
import { Grid, Button, Typography, Container, Box } from '@mui/material';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites, toggleFavorite } = useMovies();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      {/* Back to Home Button */}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/')} 
        sx={{ marginBottom: 2 }}
      >
        Back to Home
      </Button>
      
      {/* Favorites Section */}
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 2 }}>
        Your Favorite Movies
      </Typography>

      {/* No Favorites Message */}
      {favorites.length === 0 ? (
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
          You haven't added any movies to your favorites yet. Start browsing!
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {/* Movie Cards */}
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                <Button 
                  onClick={() => toggleFavorite(movie)} 
                  variant="outlined" 
                  color="secondary"
                  sx={{ width: '100%' }}
                >
                  {favorites.some(favMovie => favMovie.id === movie.id) 
                    ? 'Remove from Favorites' 
                    : 'Add to Favorites'}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;
