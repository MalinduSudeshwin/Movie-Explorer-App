import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
    window.location.reload();
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: 3, backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Mobile Menu Icon (optional) */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Logo and Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Movie Explorer
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => navigate('/')} sx={{ marginRight: 2 }}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/favorites')} sx={{ marginRight: 2 }}>
            Favorites
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
