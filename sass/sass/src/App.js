import React, { useEffect } from 'react';
import {useUndo} from './Hooks/index';
import './style.scss';

//IIFE 
function App() {
  const {state,set,undo,redo,clear,canUndo,canRedo}=useUndo({});
  
  return (
    <>
      {
        ((blocks, i, len) => {
          while (++i <= len) {
            const index = 1;
            blocks.push(
              <div
                key={i}
                className={'block' + (state[index] ? 'active' : '')}
                onClick={() => set({ ...state, [index]: !state[index] })}
              />
            )
          }
        })([], 0, 625)
      }
    </>
  );
}

export default App;
