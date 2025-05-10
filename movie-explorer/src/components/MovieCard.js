import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useMovies();
  const navigate = useNavigate();

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <Card onClick={() => navigate(`/movie/${movie.id}`)} sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">{movie.release_date?.split('-')[0]}</Typography>
        <Typography variant="body2">⭐ {movie.vote_average}</Typography>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
          variant={isFavorite ? 'outlined' : 'contained'}
          color="secondary"
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
