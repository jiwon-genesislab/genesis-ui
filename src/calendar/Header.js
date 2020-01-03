import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: 30,
    // paddingLeft: 12
  }
}));

const useButtonStyles = makeStyles(theme => ({
  container: {
    width: 36,
    height: 36,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      borderRadius: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  }
}));

function Prev(props) {
  const { classes, prevHandler } = props;
  return (
    <button className={classes.container}
      onClick={prevHandler}
    >
      <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="prev-a" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/>
          <path id="prev-c" d="M0 0h50v50H0z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="prev-b" fill="#fff">
            <use xlinkHref="#prev-a"/>
          </mask>
          <g mask="url(#prev-b)">
            <use fill="#8a8a8f" transform="translate(-13 -13)" xlinkHref="#prev-c"/>
          </g>
        </g>
      </svg>
    </button>
  );
};

function Forward(props) {
  const { classes, nextHandler } = props;
  return (
    <button className={classes.container}
      onClick={nextHandler}
    >
      <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="forward-a" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          <path id="forward-c" d="M0 0h50v50H0z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="forward-b" fill="#fff">
            <use xlinkHref="#forward-a"/>
          </mask>
          <g mask="url(#forward-b)">
            <use fill="#8a8a8f" transform="translate(-13 -13)" xlinkHref="#forward-c"/>
          </g>
        </g>
      </svg>
    </button>
  );
};

function Header(props) {
  const classes = useHeaderStyles();
  const buttonClasses = useButtonStyles();
  const { prev, forward, title } = props;
  return (
    <div className={classes.header}>
      <span style={{
        display: 'block',
        fontFamily: 'NotoSansCJKkr',
        fontSize: 18,
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.56,
        letterSpacing: 'normal',
        color: '#000000',
        paddingLeft: 20
      }}>
        { title }
      </span>
      <div>
        <Prev classes={buttonClasses} prevHandler={prev} />
        <Forward classes={buttonClasses} nextHandler={forward} />
      </div>
    </div>
  );
};

export default Header;