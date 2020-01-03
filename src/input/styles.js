const font = {
  fontFamily: 'NotoSansCJKkr',
  fontSize: 18,
  lineHeight: 1.56,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: '0.4px',
  color: '#000000'
};
const focused = {
  border: '2px solid #333333',
  borderRadius: 8,
  color: '#000000',
  backgroundColor: '#ffffff',
};
// const hover = {
//   border: '2px solid #8a8a8f',
//   borderRadius: 8,
// };
const error = {
  border: '2px solid #ff3b30',
  borderRadius: 8,
  color: '#000000',
  backgroundColor: '#ffffff',
};
const disabled = {
  border: 'solid 1px #efeff4',
  backgroundColor: 'rgba(0, 0, 0, 0.01)',
};

const input = {
  border: 'none',
  outline: 'none',
};

const border = {
  border: '1px solid #c8c7cc',
  borderRadius: 8,
};

const inputStyles = (theme, mainColor, props) => {
  const height = props.height || 44;
  const width = props.width || 'auto';
  return {
    root: {
      position: 'relative',
      width,
      height,
      padding: '0px 16px',
      ...font,
      ...border,
      // '&:hover': hover,
    },
    disabled,
    focused,
    error,
    input
  }
};

export default inputStyles;