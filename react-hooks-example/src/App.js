import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example4 from './components/Eaxmple4';
import useWindowWidth from './Hooks/useWindowWidth';
import Example5 from './components/Example5';
import withHasMounted from './hocs/withHasMounted';

function App({hasMounted}) {
  const width=useWindowWidth();
  const hasMounted2=useHasMounted();
  return (
    <div className="App">
      <p>{hasMounted && "Mounted"}</p>
      <p>{hasMounted2 && "Mounted"}</p>
      <p>{width}</p>
      <Example1/>
      <Example2/>
      <Example3/>
      <Example4/>
      <Example5/>
      <Example8/>
      <Example9/>
      <Exampl11/>
    </div>
  );
}
export default withHasMounted(App);

