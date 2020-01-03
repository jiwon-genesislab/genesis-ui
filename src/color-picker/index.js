import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import { makeStyles } from '@material-ui/styles';

import Input from '../input';

function rgbToHex(rgb) {
  const hex = parseInt(rgb, 10);
  if (isNaN(hex)) {
    return '00';
  };

  const hexString = hex.toString(16);
  return hexString.length === 1 ? `0${hexString}` : hexString; 
};

function hexToRgb(hex) {
  const rgb = parseInt(hex, 16);
  return rgb;
};

function isRgbError(rgb) {
  if (isNaN(parseInt(rgb, 10))) {
    return true;
  }
  if (rgb > 255) {
    return true;
  }
  return false;
};

const useColorStyles = makeStyles(theme => {
  return {
    container: {
      display: 'inline-block',
      boxSizing: 'border-box',
      width: 32,
      height: 32,
      borderRadius: 32,
      border: 'solid 2px #dadbdf',
    }
  };
});

const useFormControlStyles = makeStyles(theme => {
  return {
    formControl: {
      margin: 0
    }
  };
});

function ColorPicker(props) {
  const colorClasses = useColorStyles();
  const formControlClasses = useFormControlStyles();

  const [color, setColor] = React.useState({
    value: '000000',
    error: false
  });
  const [colorR, setColorR] = React.useState({
    value: '00',
    error: false
  });
  const [colorG, setColorG] = React.useState({
    value: '00',
    error: false
  });
  const [colorB, setColorB] = React.useState({
    value: '00',
    error: false
  });

  function postChangeColor(value) {
    const rgbR = hexToRgb(value.substring(0, 2));
    const rgbG = hexToRgb(value.substring(2, 4));
    const rgbB = hexToRgb(value.substring(4, 6));

    if (value.length === 6 && !isNaN(rgbR) && !isNaN(rgbG) && !isNaN(rgbB)) {
      setColor({
        value,
        error: false
      });
      setColorR({
        value: rgbR,
        error: false
      });
      setColorG({
        value: rgbG,
        error: false
      });
      setColorB({
        value: rgbB,
        error: false
      });
    } else {
      setColor({
        value,
        error: true
      });
    }    
  };

  function posChangeR(value) {
    const isError = isRgbError(value);
    setColorR({
      value,
      error: isError
    });
    if (!isError) {
      setColor({
        value: `${rgbToHex(value)}${rgbToHex(colorG.value)}${rgbToHex(colorB.value)}`,
        error: false
      });  
    }
    
  };

  function posChangeG(value) {
    const isError = isRgbError(value);
    setColorG({
      value,
      error: isError
    });
    if (!isError) {
      setColor({
        value: `${rgbToHex(colorR.value)}${rgbToHex(value)}${rgbToHex(colorB.value)}`,
        error: false
      });
    }
  };

  function posChangeB(value) {
    const isError = isRgbError(value);
    setColorB({
      value,
      error: isError
    });
    if (!isError) {
      setColor({
        value: `${rgbToHex(colorR.value)}${rgbToHex(colorG.value)}${rgbToHex(value)}`,
        error: false
      });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <span
        className={colorClasses.container}
        style={{
          position: 'absolute',
          left: 0,
          top: 32,
          backgroundColor: `#${color.value}` }} />
      <div style={{
          position: 'absolute',
          left: 48,
          margin: 0
          }}>
        <Input
          classes={formControlClasses}
          style={{ marginRight: 32 }}
          isControlled={true}
          label='HEX'
          placeholder=''
          inputProps={{ maxLength: 6 }}
          value={color.value}
          error={color.error}
          helperText={color.error ? '유효한 값을 입력하세요.' : ''}
          startAdornment={<InputAdornment position="start">#</InputAdornment>}
          postChange={postChangeColor} />
        <Input
          classes={formControlClasses}
          isControlled={true}
          style={{ marginRight: 16 }}
          label='R'
          placeholder=''
          inputProps={{ maxLength: 3 }}
          error={colorR.error}
          helperText={colorR.error ? '유효한 값을 입력하세요.' : ''}
          value={colorR.value}
          postChange={posChangeR} />
        <Input
          classes={formControlClasses}
          isControlled={true}
          style={{ marginRight: 16 }}
          label='G'
          placeholder=''
          inputProps={{ maxLength: 3 }}
          error={colorG.error}
          helperText={colorG.error ? '유효한 값을 입력하세요.' : ''}
          value={colorG.value}
          postChange={posChangeG} />
        
        <Input
          classes={formControlClasses}
          isControlled={true}
          style={{ marginRight: 16 }}
          label='B'
          placeholder=''
          inputProps={{ maxLength: 3 }}
          error={colorB.error}
          helperText={colorB.error ? '유효한 값을 입력하세요.' : ''}
          value={colorB.value}
          postChange={posChangeB} />
      </div>
    </div>
  );
};

export default ColorPicker;