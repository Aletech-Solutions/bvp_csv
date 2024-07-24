import React from 'react';
import { Button, Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleIndustrySearch = () => {
    navigate('/search');
  };

  const handleSheetInserter = () => {
    navigate('/sheet-inserter');
  };

  return (
    <Box p={3}>
      <Container>
        <Box style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Bessemer_Venture_Partners_logo.png" alt="Logo" style={{ width: '350px', marginBottom: '20px' }} />

        </Box>
        <Grid container spacing={3} justifyContent="center" style={{ marginTop: '48px' }}>

          <Grid item>
            <Button variant="contained" color="primary" onClick={handleIndustrySearch}>
              Industry Search
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleSheetInserter}>
              Sheet Inserter
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
