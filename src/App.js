import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanySearchForm from './components/CompanySearchForm';
import CompanyDataGrid from './components/CompanyDataGrid';
import Home from "./components/Home"
import IndexPage from "./components/CsvComponent"
import Footer from './components/Footer'; // Footer component

const App = () => {
    const [companyData, setCompanyData] = useState([]);

    const handleDataFetch = (data) => {
        setCompanyData(data);
    };

    return (
        <Router >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sheet-inserter" element={<IndexPage />} />

                <Route
                    path="/search"
                    element={
                        <Container>
                            <br/>
                            <br/>
                            <Box style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Bessemer_Venture_Partners_logo.png" alt="Logo" style={{ width: '350px', marginBottom: '20px' }} />
                            </Box>
                            <Grid container spacing={3} style={{ marginTop: "64px" }}></Grid>
                            <Grid item xs={12}>
                                <CompanySearchForm onDataFetch={handleDataFetch} />
                            </Grid>
                            <br/>
                            <br/>
                            <Grid item xs={12}>
                                <CompanyDataGrid data={companyData} />
                            </Grid>
                        </Container>
                    }
                />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
