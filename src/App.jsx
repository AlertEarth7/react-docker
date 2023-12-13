import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicCard from "./card";

function App() {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/attractions")
      .then((response) => response.json())
      .then((data) => setAttractions(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box height={20}></Box>
          <Typography variant="h4" gutterBottom>
            ATTRACTIONS
          </Typography>
          <Box height={5}></Box>
          <Grid container spacing={2}>
            {attractions.map((attraction) => (
              <Grid xs={6} md={4}>
                <BasicCard attraction={attraction}></BasicCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
