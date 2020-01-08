import React,{useState} from 'react';
// import axios from 'axios';
// import {useAsync} from 'react-async';
import User1 from './User1';
import { useUsersState, useUsesrDispatch, getUsers } from './UsrsContext';

// async function getUsers() {//useAsync를 사용할때 callback으로 넣어줄 함수이다.
//   const response = await axios.get('http://jsonplaceholder.typicode.com/users/');
//   return response.data;

// }//이부분은 파라미터로 받아오는것이 없기에 딱히 수정할것이없다.

//LOADING,SUCCESS,ERRROR
// function reducer(state,action){
//   switch(action.type){
//     case 'LOADING':
//       return {
//         loading:true,
//         data:null,
//         error:null
//       }
//     case 'SUCCESS':
//       return {
//         laoding:false,
//         data:action.data,
//         error:null
//       }
//     case 'ERROR':
//       return {
//         loading:false,
//         data:null,
//         error:action.error
//       }
//     default:
//        throw new Error(`UnHandled action type :${action.type}`);

//   }
// }
//useReducer 사용하여 요청에 대한 상태를 관리하였다.
function Users1() {
  // const [state, refetch] = useAsync(getUsers,[],true);//useAsync의두번째 파라미터와 세번째 파라미터를 넣는다.
  //이렇게 하면 컴포넌트가 처음 시작할때 렌더링 되는 것을 생략해주는 것이다.
  //useAsync을 통해서 요청에 대한 것들을 컴포넌트에서 처리하기때문에 코드가 간결해졌다.

  const [userId,setUserId]=useState(null);
  // const {data: users, error, isLoading,reload,run}=useAsync({//reload는 이전에 사용한 refech 와 같은 기능을 하는 것이다.
  //   deferFn:getUsers
  // })
  //이전에 버튼을 눌러야 데이터를 불러오고 싶을 경우에 react-async 라이브러리에선
  //deferFn을 사용한다. run 이라는 파라미터를 불러온다.
  //reload대신에 run 으로 대체한다.

  const state=useUsersState();
  const dispatch=useUsesrDispatch();

  const {loading,data:users,error}= state.users;

  const fetchData=()=>{
    getUsers(dispatch);
  }

  // const [state,dispatch]=useReducer(reducer,{
  //   loading:false,
  //   data:null,
  //   error:null
  // })
  // const fetchUsers = async () => {//useEffect을 사용하여 컴포넌트가 가장 처음에 렌더링이 될때 fetchUsers라는 함수를 호출한다.
  //   dispatch({type:'LOADING'});
  //   try {
  //     const response = await axios.get('http://jsonplaceholder.typicode.com/users/');
  //     dispatch({type:'SUCCESS',data:response.data})

  //   } catch (e) {
  //     dispatch({type:'ERROR',error:e})
  //     console.log(e.response.status);
  //   }
  // }
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // const { loading, data: users, error } = state;
  //그다음에는 세가지 상태에 따라 다른 값을 렌더링 할 것이다.
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생했습니다.</div>
  // if (!users) return null;//users에 제대로된 값이 들어가지않았을때
  if (!users) return <button onClick={fetchData}>불러오기</button>;//
  //이렇게 버튼을 클릭해야만 데이터를 가져온다.

  //users에 제대로된값이 들어갔을 경우에
  return (
    <>
      <ul>
        {users.map(user => <li key={user.id} onClick={()=>setUserId(user.id)}>
          {user.username}({user.name})
  </li>)}
      </ul>
      {/* <button onClick={fetchUsers}>다시불러오기</button>*버튼을 눌렀을때 특정 api를 다시 불러오는 방법 */}
      <button onClick={fetchData}>다시불러오기</button>{/**버튼을 눌렀을때 특정 api를 다시 불러오는 방법*/}
      {userId && <User1 id={userId}/>}

    </>
  )
}
export default Users1;
// 지금의 경우에는 컴포넌트가 처음 렌더링되는 시점에만 데이터 요청이 이뤄지고있다.
// 1.특정 버튼을 눌러야만 렌더링을 시작하고시파면 어떻게 해야할까?이를 위해서 useAysnc의 세번째 파라미터를 설정한다.
// 2.우리가 api함수를 호출할때 특정 파라미터가 필요할때 어떻게 하는 지 알아보자!

