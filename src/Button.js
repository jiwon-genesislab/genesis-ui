import React from 'react';
// import { Button as MaterialButton } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button';

function Button(props) {
  // return <MButton />;
  const { label, ...others } = props;
  // const [state] = React.useState('label');
  return (
    <MaterialButton {...others}>
      {/* {state} */}
      sdlkfj
    </MaterialButton>
  );
}

export default Button;