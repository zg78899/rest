import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3=()=>{

  const {persons,old}=useContext(PersonContext);
  function click(){
    // persons[0].age=persons[0].age+1;
    old();
  }
  return (
    <div>
      <p>{JSON.stringify(persons)}</p>
      <button onClick={click}>old</button>
    </div>
  ) 
}

export default Example3;