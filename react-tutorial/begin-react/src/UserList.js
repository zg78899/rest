import React,{useContext} from 'react';
import UserDispatch from './App';
//처음에 이런 방식을 사용하면 계속해서 배열이 늘어나거나 하는 경우에 사용할수없다.
//따라서 배열의 내장 함수인 map,forEach등을 사용한다.객체 상태의 배열 컴포넌트 형태의 배열로 변형을 해준다.

const User=React.memo(function User({user}){//onRemove,onToggle,user을 props로 받아서 사용하고있다.
  const {username,email,id,active}=user;
  
  const dispatch = useContext(UserDispatch);

  return(
    <div>
        < b
         style={{
          color:active?'green':'black',
          cursor:'pointer'
        }}
        onClick={()=>dispatch({
          type:'TOGGLE_USER',
          id,
        })}
        >
        {username}
        </b> &nbsp;<span>({email})</span>

        <button onClick={() =>dispatch({
          type:'REMOVE_USER',
          id,
        })}>삭제</button>
      </div>
  )
})
//React.memo로 함수 전체를 감싸준다. 최적화를 위한 것.
function UserList({users}) {//UserList는 다리역할을 할뿐 실제로 
  //UserList에서 직접 onToggle과 onRemove을 직접사용하고있지않다.그러나  User에게 전달해줘야하기때문에
  //App.js에서 UserList에서 onToggle,onRemove을 하고있다.
  //UserList는 User에게 props을 전달해주고있다.


  return (
    <div>
      {
        users.map(
          (user)=>(
          <User 
          user={user}
             key={user.id}
             
             />
             )
        )
      }
    </div>
  )
}
export default React.memo(UserList,(prevProps,nextProps)=>prevProps.users === nextProps.users);
//prevProps의 users와 nextProps의 users가 같다면 재린더링하지않겠다.
//props가 바뀌지않으면 re 렌더링 방지.
//연산된값을 재사용하기위해서는 useMemo을 사용하고
//특정함수를 재사용하기 위해서는 useCallback을 사용하고
//컴포넌트 렌더링된 결과를 재사용하기위해서는 React.memo을 사용한다.
//useCallback을 사용하여 함수를 재사용하는것이 성능이 좋아지는 것은 아니다.(개선되는 것이 아니다.)(참고),
//1.useMemo,useCallback,React.memo
//2.함수형업데이트,샅애를 업데이트할때 useState,setUsers을 사용
//3.useReducer을 사용하여 상태를 관리할수있다.