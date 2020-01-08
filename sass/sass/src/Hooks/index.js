import {useReducer,useCallback} from 'react';
//커스텀훅의 초기상태
const initialState={
  past:[],
  present:null,
  future:[]
}
//useUndo의 초기값을 현재 값으로 파라미터로 받기 위해서
export function useUndo(initalPresent){
  const [state,dispatch]=useReducer(reducer,{
    ...initialState,
    present:initalPresent
  });

}