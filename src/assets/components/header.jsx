import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Container, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { title: 'Inicio', path: '/' },
  { title: 'Sobre mí', path: '/about' },
  { title: 'Proyectos', path: '/projects' },
  { title: 'Contacto', path: '/contact' }
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Portafolio ITS 2024
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.title} color="inherit" href={item.path}>
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: '200px',
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.title} href={item.path} onClick={handleMenuClose}>
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
