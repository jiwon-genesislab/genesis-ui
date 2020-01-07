import React from 'react';

import { ControllerContext } from './context';

export default function ControllerProvider(props) {
  const initState = {
    error: false,
    disabled: false,
    readonly: false,
    hover: false,
    focus: false,
  }
  const [state, setState] = React.useState(initState);

  const handleChange = name => event => {
    setState({
      ...initState,
      [name]: event.target.checked
    });
  };

  return (
    <ControllerContext.Provider
      value={[state.error, state.disabled, state.readonly, state.hover, state.focus, handleChange]}
      children={props.children}
    >
    </ControllerContext.Provider>
  );
};