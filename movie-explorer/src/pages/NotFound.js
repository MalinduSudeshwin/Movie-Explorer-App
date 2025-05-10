import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h3" gutterBottom>404 - Page Not Found</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
