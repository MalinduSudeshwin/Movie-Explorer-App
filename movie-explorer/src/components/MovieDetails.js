import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { Typography, Container } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography>{movie.overview}</Typography>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${movie.videos?.results[0]?.key}`}
        title="Trailer"
        allowFullScreen
      />
    </Container>
  );
};

export default MovieDetails;
