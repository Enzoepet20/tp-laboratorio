import React from 'react';
import { Box, Typography, Avatar, Grid, Chip, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import profileImage from '../img/profile.jpeg';

const skills = ['React', 'JavaScript', 'Material-UI', 'CSS', 'HTML'];

const Profile = () => {
  return (
    <Box textAlign="center" mb={5}>
      <Avatar alt="Enzo Beltran" src={profileImage} sx={{ width: 200, height: 200, margin: '0 auto' }} />
      <Typography variant="h4" mt={2}>
        Enzo Beltran
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Desarrollador Frontend | React JS | Material-UI
      </Typography>

      <Box mt={2} mb={3}>
        <Typography variant="body2" color="textSecondary">
          Soy un desarrollador frontend con experiencia en construir aplicaciones web modernas y
          atractivas. Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" mb={2}>
          Habilidades
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} color="primary" />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" mb={2}>
          Conéctate conmigo
        </Typography>
        <IconButton component={Link} href="https://www.linkedin.com/in/enzo-beltran-a8b621229/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
        <IconButton component={Link} href="https://github.com/Enzoepet20" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </IconButton>
        <IconButton component={Link} href="https://x.com/cartaspoke2" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Profile;
