import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Email } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.name) errors.name = 'El nombre es requerido';
    if (!formData.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }
    if (!formData.message) errors.message = 'El mensaje es requerido';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <Box mt={5} textAlign="center">
      <Typography variant="h5" mb={3}>
        Contacto
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(formErrors.name)}
          helperText={formErrors.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Mensaje"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={Boolean(formErrors.message)}
          helperText={formErrors.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </form>

      <Box mt={5}>
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
        <IconButton component={Link} href="mailto:beltranenzocontacto@gmail.com" target="_blank" rel="noopener noreferrer">
          <Email />
        </IconButton>
      </Box>

      <Box mt={5} textAlign="left">
        <Typography variant="body1" mb={1}>
          <strong>Email:</strong> beltranenzocontacto@gmail.com
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Teléfono:</strong> +54 9 2996291364
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Dirección:</strong> Neuquen Capital
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
