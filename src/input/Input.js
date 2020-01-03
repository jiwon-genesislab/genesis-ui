import React, { useState } from 'react';
import clsx from 'clsx';
// import mergeOptions from 'merge-options';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  // Box,
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from '@material-ui/core';

import inputStyles from './styles';

function isStringWithNotEmpty (value) {
  if (typeof value === 'string') {
    return value.length > 0;
  };
  return false;
};

function calcUnitPixel(defaultUnit) {
  return function(value) {
    return defaultUnit * value;
  }
};

const useInputStyles = (props) => {
  return makeStyles(theme => {
    const mainColor = theme.primaryColor;
    if (theme.input) {
      return {
        ...inputStyles(theme, mainColor, props),
        ...theme.input
      };
    };
    return inputStyles(theme, mainColor, props);
  })
};

const useOtherStyles = makeStyles(theme => ({
  control: props => ({
    margin: props.spacing(1),
  }),
  label: props => ({
    position: 'relative',
    fontFamily: 'NotoSansCJKkr',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.29,
    letterSpacing: 0.9,
    color: '#000000',
    marginLeft: props.spacing(1),
    marginBottom: props.spacing(1),
    ...props.labelStyle
  }),
  helperText: props => ({
    marginLeft: props.spacing(1),
    error: {
      color: '#ff3b30'
    }
  }),
  readOnly: {
    color: '#8a8a8f',
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
  }
}));

function Input(props) {
  const {
    className = '',
    classes: propClasses,
    autoFocus = false,
    inputType = 'text',
    width,
    height,
    unitPixel = 8,
    placeholder = 'placeholder',
    label = '',
    labelStyle = {},
    inputProps = {},
    value: propValue,
    postChange = () => {},
    error = false,
    disabled = false,
    readonly = false,
    helperText = '',
    ...others
  } = props;

  const spacing = React.useMemo(() => calcUnitPixel(unitPixel), [unitPixel]);
  
  const inputClasses = useInputStyles({
    width,
    height,
    spacing,
    labelStyle
  })();
  const otherClasses = useOtherStyles({
    spacing,
    labelStyle
  });

  const [value, setValues] = useState(propValue);
  const [status, setStatus] = useState({
    error,
    disabled,
    readonly
  });

  // function
  const handleChange = event => {
    if (postChange) {
      postChange(event.target.value);
    } else {
      setValues(event.target.value);
    }
  };

  React.useEffect(() => {
    setStatus({
      error,
      disabled,
      readonly
    });
    setValues(propValue);
  }, [error, disabled, readonly, propValue]);

  return (
    <FormControl
      className={clsx(otherClasses.control, propClasses && propClasses.formControl)}
      hiddenLabel={isStringWithNotEmpty(label)}
    >
      <InputLabel htmlFor='genesislab-input-label'
        className={otherClasses.label}
        focused={false}
        shrink>
        { label }
      </InputLabel>
      <InputBase
        id='genesislab-input-base'
        className={className}
        classes={inputClasses}
        type={inputType}
        autoFocus={autoFocus}
        readOnly={status.readonly} 
        error={status.error}
        disabled={status.disabled}
        inputProps={{ ...inputProps, className: status.readonly ? otherClasses.readOnly: '' }}
        placeholder={placeholder}
        // defaultValue={value !== 0 && !isStringWithNotEmpty(value) ? '' : value}
        value={value}
        onChange={handleChange}
        {...others}
      />
      {
        helperText &&
        <FormHelperText id='genesislab-input-helper'
          className={otherClasses.helperText}
          error={status.error}>
          { helperText }
        </FormHelperText>
      }
      
    </FormControl>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  inputType: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  unitPixel: PropTypes.number,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  inputProps: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  postChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
};

export default Input;
