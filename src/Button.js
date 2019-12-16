import React from 'react';
import MButton from '@material-ui/core/Button';

function Button(props) {
  // return <MButton />;
  const { label, ...others } = props;
  return (
    <MButton {...others}>
      {label}
    </MButton>
  )
}

export default Button;