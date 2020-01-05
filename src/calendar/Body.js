import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  table: {
    position: 'absolute',
    top: 92,
    border: 'none',
    borderSpacing: 0
  },
  td: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: 32,
    height: 22,
    margin: 6,
    padding: 0, 
  },
  dayLabel: {
    fontFamily: 'NotoSansCJKkr',
    fontSize: 14,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.57,
    letterSpacing: 0.1,
    color: '#8a8a8f',
  }
}));

const useButtonStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: 0,
    backgroundColor: 'transparent',
    '& span': {
      color: '#c8c7cc',
      fontFamily: 'NotoSansCJKkr',
      fontSize: 18,
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.56,
      letterSpacing: 'normal',
    }
  },
  thisMonth: {
    '& span': {
      color: '#666666'
    }
  },
  hover: {
    cursor: 'pointer',
    '&:hover': {
      borderRadius: 16,
      backgroundColor: 'rgba(76 128 241, 0.08)',
    }
  },
  selected: {
    borderRadius: 16,
    backgroundColor: '#4c80f1',
    '&:hover': {
      backgroundColor: '#4371d4',
    },
    '& span': {
      color: '#ffffff'
    }
  },
}));

function Body(props) {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const {
    selectedDate,
    weeksLabel,
    dayList,
    setSelectDate
  } = props;

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          { weeksLabel.map(item => {
            return (
              <td key={item.id} className={classes.td} style={{ textAlign: 'center' }}>
                <span className={classes.dayLabel}>
                  { item.label }
                </span>
              </td>
            )}
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
        { dayList.map(item => {
          const isSelected = item.date === selectedDate;
          const isThisMonth = item.isThisMonth;
          return (
            <td key={item.id} className={classes.td}>
              <button
                className={
                  clsx(buttonClasses.container,
                  isThisMonth && buttonClasses.thisMonth,
                  isSelected && buttonClasses.selected,
                  isThisMonth && buttonClasses.hover)
                }
                onClick={setSelectDate(item)}>
                <span> { item.day } </span>
              </button>
            </td>
          )
        })}
        </tr>
      </tbody>
    </table>
  );
};

export default Body;