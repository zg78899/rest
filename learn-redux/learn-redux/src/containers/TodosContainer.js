import React,{useCallback} from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {addTodo,toggleTodo} from '../modules/todos';


function TodosContainer({addTodo,toggleTodo}){
  
  const onCreate =useCallback(text=>(addTodo(text)),[addTodo]);
  const onToggle=useCallback(id=>(toggleTodo(id)),[toggleTodo]);
  
  return <Todos
  todos={todos}
  onCreate={onCreate}
  onToggle={onToggle}
  />
}
  const mapStateToProps=state=>({todos:state.todos})
  const mapDistpatchToProps={
    addTodo,
    toggleTodo
  }

export default connect(mapStateToProps,mapDistpatchToProps)(TodosContainer);
// export default connect(
//   state =>({todos:state.toods}),
//   {
//     addTodo,
//     toggleTodo
//   }
// )(TodosContainer);
//mapStateToProps,mapDistpatchToProps을 
//사용하지않고 코드를 작성할때 이런방식으로 한다.
