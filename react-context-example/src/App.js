import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import PersonContext from './contexts/PersonContext';
function App() {
  
  const [persons,setPersons]=useState([
    {id:0,name:'kim',age:27},
    {id:1,name:'park',age:25}
  ]);
  return (
    <PersonContext.Provider
    value={{persons,
    old:()=>{
      console.log('old');
      setPersons(persons=>persons.map(person=>({
        age:person.age+1
      })));
    }}}
    >
      <div className="App">
        <header className="App-header">
          <Example1/>
          <Example2/>
          <Example3/>
        </header>
      </div>
    </PersonContext.Provider>
  );
}

export default App;
