import React, { useReducer, useContext, createContext } from 'react';
// import axios from 'axios';
import * as api from './api';//api파일에 있는 모든 함수들이 들어있는 api라는 객체를 리턴하게 된다.
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from './asyncActionUtils';

const initalState = {
  users: initialAsyncState,
  // users: {
  //   lading: false,
  //   data: null,//결과 값
  //   error: null
  // },
  user: initialAsyncState
  // user: {
  //   loading: false,
  //   data: null,
  //   error: null
  // }
}
// const loadingState = {
//   loading: true,
//   data: null,
//   error: null
// };//로딩 중일때 는 이 객체가 기본 값을대체한다.
// const success = (data) => ({
//   loading: false,
//   data,
//   error: null
// });
// const error = e => ({
//   laoding: false,
//   data: null,
//   error: e
// })
//GET_USERS,GET_USERS_SUCCESS,GET_USERS_ERROR(여러명의 유저를 가져오는 것)
//GET_USER,GET_USER_SUCCESS,GET_USER_ERROR(특정 유저를 가져오는 것이다.)
//총 6가지 상태에 대한 reducer을 만들었다.

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

function usersRecuder(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    // return {
    //   ...state,
    //   users: loadingState,
    // };
    case 'GET_USERS_SUCCESS':
    // return {
    //   ...state,
    //   users: success(action.data)
    // }
    case 'GET_USERS_ERROR':
      // return {
      //   ...state,
      //   users: error(action.error)
      // }
      return usersHandler(state, action);
    case 'GET_USER':
    // return {
    //   ...state,
    //   user: loadingState,
    // };
    case 'GET_USER_SUCCESS':
    // return {
    //   ...state,
    //   user: success(action.data)
    // }
    case 'GET_USER_ERROR':
      // return {
      //   ...state,
      //   user: error(action.error)
      // }
      return userHandler(state, action);

    default:
      throw new Error('Unhandled aciton type', action.type);
  }
}

const UsersStateContext = createContext(null);//상태를 위한 context
const UsersDispatchContext = createContext(null)//dispatch를 위한 context
//context을 나누는 이유는 나중에 컴포넌트를 최적화 하는데 용이하기 때문이다.
//해당 dispatch값이나 state을 받아와서 사용하기에도 용이하기 때문이다.

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersRecuder, initalState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}
export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot Fund UserProvider');
  }//만약에 state가 유효하지않다면 error을 발생 시키고 
  return state;

}
export function useUsesrDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot Find userProvider');
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers)
//createAsyncDispatcher 의 첫번째 파라미터는 타입,두번째 파라미터는 프로미스 함수

export const getUser = createAsyncDispatcher('GET_USER', api.getUser);

// export async function getUsers(dispatch) {
//   dispatch({ type: 'GET_USERS' });
//   try {
//     const response = await axios.get('http://jsonplaceholder.typicode.com/users/');
//     dispatch({
//       type: 'GET_USERS_SUCCESS',
//       data: response.data
//     })
//   } catch (e) {
//     dispatch({
//       type: 'GET_USERS_ERROR',
//       error: e
//     })
//   }
// }

// export async function getUser( dispatch ,id) {
//   dispatch({ type: 'GET_USER' });
//   try {
//     const response = await 
//     axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
//     dispatch({
//       type: 'GET_USER_SUCCESS',
//       data: response.data
//     })
//   } catch (e) {
//     dispatch({
//       type: 'GET_USER_ERROR',
//       error: e
//     })
//   }
// }




