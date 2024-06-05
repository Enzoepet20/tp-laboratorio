import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box mt={5} mb={3} textAlign="center" py={3} bgcolor="primary.main" color="white">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Mi Portafolio ITS 2024
          </Typography>
          <Typography variant="body2">
            © 2024 Mi Portafolio. Todos los derechos reservados.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Enlaces
          </Typography>
          <Link href="/" color="inherit" underline="none">
            Inicio
          </Link>
          <br />
          <Link href="/about" color="inherit" underline="none">
            Sobre mí
          </Link>
          <br />
          <Link href="/projects" color="inherit" underline="none">
            Proyectos
          </Link>
          <br />
          <Link href="/contact" color="inherit" underline="none">
            Contacto
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Conéctate conmigo
          </Typography>
          <IconButton color="inherit" href="https://www.linkedin.com/in/enzo-beltran-a8b621229/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/Enzoepet20" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="https://x.com/cartaspoke2" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="mailto:beltranenzocontacto@gmail.com" target="_blank" rel="noopener noreferrer">
            <Email />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

