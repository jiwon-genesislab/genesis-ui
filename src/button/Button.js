import React from 'react';
import PropTypes from 'prop-types';
// import mergeOptions from 'merge-options';

import { makeStyles } from '@material-ui/styles';
import MaterialButton from '@material-ui/core/Button';
import ButtonStyles from './styles';

const useButtonStyles = makeStyles(theme => {
  const mainColor = theme.color.primary.main;
  if (theme.button) {
    return theme.button;
  }
  return ButtonStyles(theme, mainColor);
});

function Button(props) {
  const {
    colorType = 'primary',
    variant = 'contained',
    label = 'Button',
    classes,
    className,
    disabled = false,
    width,
    height,
    ...others
  } = props;
  const primaryClasses = useButtonStyles({
    width,
    height,
    variant,
    disabled,
    colorType
  });
  const adaptColorClasses = primaryClasses;

  return (
    <MaterialButton
      color='default'
      className={className}
      classes={{ ...adaptColorClasses, ...classes }}
      variant={variant}
      disabled={disabled}
      disableRipple={true}
      {...others}>
      { label }
    </MaterialButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([
    'text',
    'outlined',
    'contained',
  ]),
  colorType: PropTypes.oneOf([
    'primary',
    'second',
    'third',
  ])
};

export default Button;
