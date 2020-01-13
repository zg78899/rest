import React, { useReducer, useCallback } from 'react';
const initalState={
  past:[],
  present:null,
  future:[]
}
const reducer=(state,action)=>{
  const {past,present,future} = state;

  switch(action.action){
    case 'UNDO':
     const previous=past[past.length -1];
     const newPast=past.slice(0,past.length-1);
     return {
       past:newPast,
       present:previous,
       future:[...past,present]
     }
     case 'REDO':
       const next=future[0];
       const newFuture=future.slice(1);

      return{
        past:[...past,present],
        present:next,
        future:newFuture
      }
      case 'CLEAR':
        return {
          ...initalState,
          present:initalPresent,
        }
        case 'SET':
          if(newPresent === present){
            return state;
          }
          return {
            past:[...past,present],
            present:newPresent,
            future:[]
          }
  }
}

export default function useUndo(initalPresnt) {
  const [state,dispatch]=useReducer(reducer,{
    ...initalState,
    present:initalPresnt
  });
  const canUndo=state.past.length !== 0;
  const canRedo =state.future.length !== 0;
  
  const undo=useCallback(()=>{
    if(canUndo){
      dispatch({type:'UNDO'})
    }
  },[canUndo,dispatch]);

  const redo =useCallback(()=>{
    if(canRedo){
      dispatch({type:'REDO'});
    }
  },[canRedo,dispatch]);

  const set=useCallback((newPresent)=>{
    dispatch({type:'SET',newPresent})
  },[dispatch]);

  const clear =useCallback((initalPresent)=>{
    dispatch({type:'CLEAR',initalPresent});
  },[dispatch]);

  return {state:state.present,undo,redo,clear,canUndo,canRedo,set}
}
