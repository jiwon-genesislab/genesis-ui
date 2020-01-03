import { createMuiTheme } from '@material-ui/core/styles';

export default function createTheme(color) {
  return createMuiTheme({
    color: {
      primary: {
        main: color,
        disabled: 'rgba(0, 0, 0, 0.01)',
        hover: '#f9f9f9',
        pressed: '#efefef'
      },
      secondary: {
        main: '#4c80f1',
        // main: color,
        disabled: 'rgba(76, 128, 241, 0.4)',
        hover: 'rgba(76, 128, 241, 0.1)',
        pressed: '#2d4d91'
      },
      third: {
        main: '#ff6f61',
        disabled: 'rgba(255, 111, 97, 0.4)',
        hover: '#e16255',
        pressed: '#99423a'
      },
    },
    overrides:{
      MuiTableRow: {
        root: {
          height: '100%'
        },
        head: {
          height: '100%'
        }
      }
    },
  });
};
