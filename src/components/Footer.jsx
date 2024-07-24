import React from 'react';
import { Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '12px 0' }}>
      <Typography variant="body2">
        &copy; Bessemer Venture Partners 2024
      </Typography>
    </Grid>
  );
};

export default Footer;