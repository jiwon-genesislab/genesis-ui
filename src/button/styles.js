import { blend_colors } from '../styles';

function convertColor(color) {
  if (!color) {
    return '#000000';
  }
  if (color.substring(0,1) === '#') {
    color = color.substring(1);
    const rgbColor = {};
    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.rChannel = parseInt(color.substring(0, 2), 16);
    rgbColor.gChannel = parseInt(color.substring(2, 4), 16);
    rgbColor.bChannel = parseInt(color.substring(4), 16);
    return rgbColor;
  } else {
    const rgbColor = {};
    const splitRgbColor = color.replace('rgba(', '').replace(')', '').split(',');
    rgbColor.rChannel = splitRgbColor[0].trim();
    rgbColor.gChannel = splitRgbColor[1].trim();
    rgbColor.bChannel = splitRgbColor[2].trim();
    return rgbColor;
  }
};

const buttonStyles = (theme, mainColor) => {
  return {
    root: props => {
      return {
        width: props.width || 'auto',
        height: props.height || 44,
        boxShadow: 'none',
        borderRadius: 8,
        fontFamily: 'NotoSansCJKkr',
        fontSize: 16,
        lineHeight: 2.25,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#000000',
        padding: 0,
      }
    },
    label: props => {
      const isDisabled = props.disabled;
      const variant = props.variant;
      let labelColor = '#ffffff';
      let labelDisabledColor = 'rgba(0, 0, 0, 0.2)';
      if (variant === 'outlined') {
        labelColor = '#000000';
        labelDisabledColor = 'rgba(0, 0, 0, 0.2)';
      } else {
        if (props.colorType === 'second') {
          labelColor = mainColor;
          const rgbColor = convertColor(mainColor);
          labelDisabledColor = `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.2)`;
        }
      }

      return {
        fontFamily: 'NotoSansCJKkr',
        fontStyle: 'normal',
        fontStretch: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 2.25,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: isDisabled ? labelDisabledColor : labelColor,
      }
    },
    contained: props => {
      const rgbColor = convertColor(mainColor);
      if (props.colorType === 'second') {
        return {
          borderRadius: 8,
          backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.04)`,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.08)`,
          },
          '&:active': {
            backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.2)`,
          },
          '&:disabled': {
            backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.01)`,
          }
        }
      }

      return {
        borderRadius: 8,
        backgroundColor: mainColor,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: blend_colors(mainColor, '#000000', 0.12)
          // backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.88)`,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: blend_colors(mainColor, '#000000', 0.4)
          // backgroundColor: `rgba(${rgbColor.rChannel}, ${rgbColor.gChannel}, ${rgbColor.bChannel}, 0.4)`,
        },
        '&:disabled': {
          backgroundColor: '#f7f7f7',
        }
      }
    },
    outlined: () => {
      return {
        borderRadius: 8,
        border: 'solid 1px #dadbdf',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#000000',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1.12)'
        },
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 1.4)'
        },
        '&:disabled': {
          backgroundColor: '#f7f7f7',
        }
      }
    },
    text: {},
  }
};

export default buttonStyles;