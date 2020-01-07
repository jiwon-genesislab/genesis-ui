import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const themeColorList = [
  {id: 1, value: '#a50034' },
  {id: 2, value: '#ec008b' },
  {id: 3, value: '#4c80f1' }
];

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => {
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  );
});

export default function CustomizedMenus(props) {
  const {
    anchorEl,
    handleClose
  } = props;

  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
    >
      { themeColorList.map(item => {
        return (
            <MenuItem key={item.id}>
              <button 
                style={{ width: 200, height: 44, backgroundColor: item.value }}
                onClick={() => handleClose(item.value)}>
              </button>
            </MenuItem>  
          );
        })
      }
    </StyledMenu>
  );
};