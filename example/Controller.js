import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ControllerContext } from './context';

export default function ControllerProvider(props) {
  const { components } = props
  const contextList = React.useContext(ControllerContext)
  const handleChange = contextList[5]

  function mapping (name) {
    if (name === 'error') {
      return contextList[0]
    } else if (name === 'disabled') {
      return contextList[1]
    } else if (name === 'readonly') {
      return contextList[2]
    } else if (name === 'hover') {
      return contextList[3]
    } else if (name === 'focus') {
      return contextList[4]
    }
  };
  
  return (
      <FormGroup row>
        {
          components.controller
          // .filter(item => item)
          .map(item => <FormControlLabel key={item} control={
            <Checkbox
              checked={mapping(item)}
              onChange={handleChange(item)}
              value={item} />
          }
          label={item}
        />)
        }

        {/* <FormControlLabel control={
            <Checkbox checked={error}
              onChange={handleChange('error')}
              value="error" />
          }
          label="Error"
        />
  
        <FormControlLabel control={
            <Checkbox checked={disabled}
              onChange={handleChange('disabled')}
              value="disabled"
            />
          }
          label="Disabled"
        />

        <FormControlLabel control={<Checkbox
          value="readonly"
          onChange={handleChange('readonly')}
          checked={readonly} />}
          label="Readonly"
        />
        
        <FormControlLabel control={
            <Checkbox
              checked={hover}
              onChange={handleChange('hover')}
              value="hover"
            />
          }
          label="Hover"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={focus}
              onChange={handleChange('focus')}
              value="focus"
            />
          }
          label="focus"
        /> */}
      
      </FormGroup>
  );
}