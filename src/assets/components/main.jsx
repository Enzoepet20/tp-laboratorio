import React from 'react';
import { Box } from '@mui/material';
import Profile from './profile';
import Projects from './projects';
import Contact from './contact';

const Main = () => {
  return (
    <Box my={5}>
      <Profile />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Main;
