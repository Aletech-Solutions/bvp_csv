import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const CompanySearchForm = ({ onDataFetch }) => {
  const [industry, setIndustry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:7777/api/v1/unseen/companies', {
        params: {
          industry: industry
        }
      });
      onDataFetch(response.data); // Pass data to parent component
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Industry"
            variant="outlined"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{height:"55px"}}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CompanySearchForm;
