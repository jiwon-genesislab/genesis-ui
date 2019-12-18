import React from 'react';

function Hook(props) {
  const [state] = React.useState('label');
  return (
    <div>
      {state}
    </div>
  );
}

export default Hook;