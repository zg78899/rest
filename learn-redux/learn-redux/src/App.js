import React from 'react';
import CounterContainer from './containers/CounterContainerHook';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  )
}
export default App;
