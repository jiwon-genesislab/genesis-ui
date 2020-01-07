import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  sidenav: props => ({
    height: '100%',
    width: props.sideBarWidth,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#111',
    overflowx: 'hidden',
    paddingTop: 20,
    '& button': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '6px 8px 6px 16px',
      textDecoration: 'none',
      fontFamily: 'NotoSansCJKkr',
      fontSize: 16,
      color: '#818181',
    },
    // '& button:hover': {
    //   color: '#f1f1f1'
    // }
  }),
});

function SideBar(props) {
  const { sideBarWidth, components, setComponentIndex } = props
  const classes = useStyles({ sideBarWidth });

  function clickComponent(event) {
    setComponentIndex(event.target.name)
  }
  return (
    <div className={classes.sidenav}>
      { components.map(item => <button key={item.id}
          name={item.index}
          onClick={clickComponent}>
          { item.name }
        </button>
      )}
    </div>
  )
}

export default SideBar
