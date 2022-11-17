import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
  <ChakraProvider>
    <Router>
    <Homepage/>
    <Routes>
      <Route exact path='./Signup' element = {<Signup/>}/>
    </Routes>
    </Router>
    </ChakraProvider>
  );
  
}

export default App;
