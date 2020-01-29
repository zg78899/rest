import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example1=()=>(
  <PersonContext.Consumer>
    {value=><ul>{JSON.stringify(value)}</ul>}
  </PersonContext.Consumer>
)
export default Example1;