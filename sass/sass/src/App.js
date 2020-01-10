import React from 'react';
import useUndo from './Hooks/index';
import './style.scss';

function App() {
  const {state,undo,redo,clear,canUndo,canRedo,set}=useUndo({});
  return (
  <div className="container">

    <div className="controls">
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <button onClick={clear}>Clear</button>
    </div>
    <div className="gird">

    {((block,i,len)=>{
        while(++i<=len){
          let index=1;
          block.push(
            <div key={i}
            className={'block'+state[index]?' active':''}
            onClick={()=>set({...state,[index]:!state[index]})} />
          )
        }
        return block;
      })([],0,625)}
    </div>
  </div>
  )

}
export default App;