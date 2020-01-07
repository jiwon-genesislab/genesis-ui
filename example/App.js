// import React from 'react';
// import { ThemeProvider } from '@material-ui/styles';

// import createTheme from './theme';

// import './App.css';
// import {
//   // Input,
//   Button,
//   // Calendar,
//   // ColorPicker
// } from '../src';

// function App() {
//   // return <Input />;
//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       {/* <Calendar /> */}
//       <Button />
//     </ThemeProvider>
//   )  
//   // return <ColorPicker />;
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

// export default App;

import React from 'react';
// import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';

import Home from './Home';
import SideBar from './SideBar';
import * as Components from '../src';

const useStyles = makeStyles({
  app: {
    display: 'block'
  }
});

function App() {
  const classes = useStyles();
  console.log(Components)
  const componentList = Object.keys(Components).map((key, index) => {
    // const [error, disabled, readonly, hover, focus, handleChange] = React.useContext(ControllerContext)
    let controller = []
    if (key === 'Checkbox') {
      controller = ['disabled']
    } else if (key === 'Input') {
      controller = ['error', 'disabled', 'readonly']
    } else if (key === 'Button') {
      controller = ['disabled']
    }
    return {
      id: `component-${index}`,
      index,
      name: key,
      component: Components[key],
      controller
    }
  })
  const [componentIndex, setComponentIndex] = React.useState(0);
  const sideBarSize = 250;

  function setCompIndex (index) {
    setComponentIndex(index)
  };

  return (
    <div className={classes.app}>
      <SideBar sideBarWidth={sideBarSize}
        components={componentList}
        setComponentIndex={setCompIndex} />
      <Home sideBarWidth={sideBarSize} 
        components={componentList}
        componentIndex={componentIndex} />
    </div>
  );
};

export default App;

