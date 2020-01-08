import {combineReducers} from 'redux';
import counter from './counter';//각각 reducer을 가리킨다.
import todos from './todos';

//root reducer
const rootReducer = combineReducers({
  counter,
  todos
});//combineReducer()호출;
export default rootReducer;


