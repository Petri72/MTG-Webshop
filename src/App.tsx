import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Cardgrid from './Cardgrid';



function App() {
  
  return (
    <Container className="App">
      <Navbar />
      <h1>Cardlist</h1>
      <Cardgrid />
    </Container>
  );
}

export default App;
