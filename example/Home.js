import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import createTheme from './theme';
import ControllerProvider from './ControllerProvider';
import Controller from './Controller';
import SelectTheme from './Select-Theme';
// import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  return {
    main: props => ({
      marginLeft: props.sideBarWidth,
      fontSize: 28,
      padding: '0 10',
      '& h2': {
        textAlign: 'center'
      }
    })
  }
});

function Home(props) {
  const { sideBarWidth, components, componentIndex } = props
  const classes = useStyles({ sideBarWidth });

  // state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [themeColor, setThemeColor] = React.useState('#a50034');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (color) => {
    setThemeColor(color);
    setAnchorEl(null);
  };

  const SelectComponent = components[componentIndex].component;
  const theme = createTheme(themeColor);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          style={{ backgroundColor: themeColor, color: '#ffffff' }}
          onClick={handleClick}
        >
          theme
        </Button>
        <SelectTheme
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
        <h2> { components[componentIndex].name } </h2>
        <Container>
          <ControllerProvider>
            <Controller components={components[componentIndex]} />
            <SelectComponent />
          </ControllerProvider>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
