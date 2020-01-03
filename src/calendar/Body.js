import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

// const useBodyStyles = makeStyles(theme => ({
//   container: {
//     width: 320,
//     height: 346,
//     bordeRadius: 8,
//     boxShadow: '0 16px 16px 0 rgba(0, 0, 0, 0.16)',
//     backgroundColor: '#f9f9f9'
//   }
// }));

const useButtonStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: 0,
    backgroundColor: 'transparent',
  },
  hover: {
    cursor: 'pointer',
    '&:hover': {
      borderRadius: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  },
  selected: {
    borderRadius: 16,
    backgroundColor: '#4371d4',
  },
}));

function Body(props) {
  const buttonClasses = useButtonStyles();
  const {
    selectedDate,
    weeksLabel,
    dayList,
    setSelectDate
  } = props;
  return (
    <div>
      <table style={{ position: 'absolute',
        top: 92,
        border: 'none', borderSpacing: 0 }}>
        <thead>
          <tr style={{ }}>
            { weeksLabel.map(item => <td key={item.id}
              style={{ boxSizing: 'border-box', display: 'inline-block', width: 32, height: 22, margin: 6, textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'NotoSansCJKkr',
                  fontSize: 14,
                  fontWeight: 500,
                  fontStretch: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 1.57,
                  letterSpacing: 0.1,
                  textAlign: 'center',
                  color: '#8a8a8f',
                }}>
                  { item.label }
                </span>
                </td>
              )
            }
          </tr>
        </thead>
        <tbody>
          <tr>
          { dayList.map(item => {
            const isSelected = item.date === selectedDate;
            const isThisMonth = item.isThisMonth;
            return <td key={item.id}
              style={{ boxSizing: 'border-box', display: 'inline-block', width: 32, height: 32, margin: 6 }}>
                <button className={clsx(buttonClasses.container, isSelected && buttonClasses.selected, isThisMonth && buttonClasses.hover)}
                  onClick={setSelectDate(item)}>
                  <span style={{
                    fontFamily: 'NotoSansCJKkr',
                    fontSize: 18,
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.56,
                    letterSpacing: 'normal',
                    color: isThisMonth ? (isSelected ? '#ffffff' : '#666666') : '#c8c7cc'
                  }}>
                    { item.day }
                  </span>
                  </button>
                </td>
            })
          }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Body;