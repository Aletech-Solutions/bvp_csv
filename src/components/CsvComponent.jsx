"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CloudUpload, CloudDone } from '@mui/icons-material'; // Import icons
import LinearProgress from '@mui/material/LinearProgress'; // Import LinearProgress for loading indicator
import axios from "axios";
const IndexPage = () => {
  const [uploading, setUploading] = useState(false); // State to track uploading status

  const handleFileSelect = () => {
    // Trigger file input click
    document.getElementById('fileInput').click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        // Simulate starting upload
        setUploading(true);
  
        // Create FormData object to send file
        const formData = new FormData();
        formData.append('file', file);
  
        // Send POST request to your backend API
        const response = await fetch('http://13.59.243.98:8091/api/v1/core/csv', {
          method: 'POST',
          body: formData,
        });
  
        // Check if request was successful
        const csvString = await response.text();

        // Convert the CSV string to a Blob
        const blob = new Blob([csvString], { type: 'text/csv' });
  
        // Create a link element, set the href and download attributes to trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'reports.csv';
        document.body.appendChild(link);
        link.click();
  
        // Clean up
        document.body.removeChild(link);
        setUploading(false)
      } catch (error) {
        console.error('Error fetching or downloading CSV:', error);
        alert('Failed to download CSV. Please try again.');
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Bessemer_Venture_Partners_logo.png" alt="Logo" style={{ width: '350px', marginBottom: '20px' }} />
      <Typography color="#015089" variant="h4" component="h1" gutterBottom style={{ marginTop: "120px" }}>
        BVP Sheet Report Generation
      </Typography>
      <input
        id="fileInput"
        type="file"
        accept=".csv" // Limit to CSV files (optional)
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <Button
        style={{ marginTop: "24px" }}
        variant="contained"
        color="primary"
        startIcon={uploading ? <CloudUpload /> : <CloudDone />} // Show CloudUpload icon during upload, CloudDone when done
        onClick={handleFileSelect} // Trigger file input
      >
        {uploading ? 'Uploading...' : 'Upload CSV'}
      </Button>
      {uploading && <LinearProgress style={{ marginTop: '10px', width: '100%' }} />} {/* Show loading progress */}
    </Container>
  );
};

export default IndexPage;
