import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './Components/NavBar.js'
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';

function App() {
  return (
  <ChakraProvider>
    <NavBar></NavBar>
    <Homepage></Homepage>
    <Signup></Signup>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ChakraProvider>
  );
  
}

export default App;
