import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import createTheme from './theme';

import './App.css';
import {
  // Input,
  // Button,
  Calendar,
  // ColorPicker
} from '../src';

function App() {
  // return <Input />;
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Calendar />
    </ThemeProvider>
  )  
  // return <ColorPicker />;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
