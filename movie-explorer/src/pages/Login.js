import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/'; 
    } else {
      setError('Invalid username or password');
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ width: '100%', padding: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            Login
          </Typography>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          {error && <Typography color="error" align="center" sx={{ marginBottom: 2 }}>{error}</Typography>}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
