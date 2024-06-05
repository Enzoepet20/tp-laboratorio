import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, CardActions, Button, Chip } from '@mui/material';
import museoMNBA from '../img/museoMNBA.png';
import limpiArImage from '../img/limpi-ar.jpeg';

const projects = [
  {
    title: 'Olimpiadas Programacion 2022',
    description: 'Proyecto de olimpiadas de programación 2022 para el MNBA.',
    image: museoMNBA,
    technologies: ['JavaScript', 'React', 'Material-UI'],
    link: 'https://github.com/RayenMillahual/Group'
  },
  {
    title: 'Proyecto 6to año E.P.E.T N° 20',
    description: 'Aplicacion Limpi-ar Para gestion de auxiliares de servicio.',
    image: limpiArImage,
    technologies: ['JavaScript', 'React', 'Node.js'],
    link: 'https://github.com/GermanDobler/Limpi-AR'
  },
];

const Projects = () => {
  return (
    <Box>
      <Typography variant="h5" mb={3}>
        Proyectos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h6">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {project.description}
                </Typography>
                <Box mb={2}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip key={techIndex} label={tech} variant="outlined" color="primary" size="small" style={{ margin: '2px' }} />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Proyecto
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
