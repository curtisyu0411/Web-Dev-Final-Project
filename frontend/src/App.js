import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Signin from './Components/SignIn';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SplitScreen from './Components/Homepage';

function App() {
  return (
  <ChakraProvider>
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/Signup' element = {<Signup/>}/>
      <Route exact path='/SignIn' element = {<Signin/>}/>
    </Routes>
    </Router>
    </ChakraProvider>
  );
  
}

export default App;
