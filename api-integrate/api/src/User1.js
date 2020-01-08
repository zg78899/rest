import React,{useEffect} from 'react';
import { useUsersState, useUsesrDispatch, getUser } from './UsrsContext';
// import axios from 'axios';
// import {useAsync} from 'react-async';
//react-async 라이브러리를 사용하면 장점과 단점이 존재한다.
//장점:필요한 경우에 라이브러리를 받아와 사용하면 되기때문에 유용하다.
//컴포넌트에서 비동기 작업을 위해 사용되는 기능 들이 탑재 되어대부분 처리가 가능하고, 컴포넌트 형태로도 가능 하다.
//특정 프로미스 작업을 취소하는 기능도 존재한다.
//단점으로 옵션 조금 복잡하다,커스텀 훅의 경우는 조금더 간단하다는( 파라미터를 몇개 전달하면 되기때문에) 장점이 존재
// async function getUser({id}){
//   const response=await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
//   return response.data;
// }



function User1({id}) {//id의 값을 props로 받아오겠다.
  // const {
  //   data:user,
  //   error,
  //   isLoading
  // } = useAsync({
  //   promiseFn:getUser,//프로미스를 반환하는 함수인 getUser을 넣는다.
  //   id,
  //   watch:id,//컴포넌트가 처음 작동할때는 getUserd에 id를 넣어서 작동한다.만약에 id값이 바뀌면 다시 useAsync을 실행하겠다.
  //   //사실상 우리가 deps에 값을 넣었던 것과 같은 것이다.


  // });//id값이 바뀔때 마다 이함수를 호출하겠다.

  const state=useUsersState();
  const dispatch=useUsesrDispatch();
  
  useEffect(()=>{//컴포넌트가 처음 렌더링 될때 데이터를 호출해야하기대문에 useEffect을 사영한다.
    getUser(dispatch,id);
  },[dispatch,id]);

  const {loading,data:user,error}=state.user;

  
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생했습니다.</div>
  if (!user) return null;


  return (//데터가 처음 요청 될때 렌더링 이 되어야하기에,useEffect을 사용한다.
    <div>
      <h2>{user.username}</h2>
      <p><b>Email : </b>{user.email}</p>
    </div>
  )
}
export default User1;