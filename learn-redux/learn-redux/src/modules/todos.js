const ADD_TODO = 'todos/ADD_TODO'; //할일 항목을 추가
const TOGGLE_TODO = 'todos/TOGGLE_TODO';//할일 항목을 체크함

let nextId = 1;
export const addTodo = text => ({//액션 생성함수는 export로 내보낸다.
  type: ADD_TODO,
  todo: {
    id: nextId++,//한번 호출되고나면 1씩 더하겠다.
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

const initalState = [
  // {
  //  /**
  //   * id:,
  //   * text,
  //   * done
  //   */
  // }
];

export default function todos(state = initalState, action) {//reducer는 export default로 내보낸다.
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.id ? { ...todo, done: !todo.done } : todo);
    default:
      return state;
  }

}

