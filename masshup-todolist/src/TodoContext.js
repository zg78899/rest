import React, { useReducer, createContext, useContext } from 'react';

const initalTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];
//Create,toggl,remove
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);

    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`UnHaandledAction Type ${action.type}`);
  }
}
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initalTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}
//커스텀 훅을 사용
export function useTodoState(){
  return useContext(TodoStateContext);

}
export function useTodoDispatch(){
  return useContext(TodoDispatchContext);
}

