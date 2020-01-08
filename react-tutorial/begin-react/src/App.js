import React, { useReducer, useMemo, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성사용자수를 세는 중..');
  return users.filter(user => user.active).length;
}
const initialState = {

  users: [
    {
      id: 1,
      username: 'kim',
      email: 'abx@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'park',
      email: 'zxc@gmail.com',
      active: true,
    },
    {
      id: 3,
      username: 'lee',
      email: 'zxczc@gmail.com',
      active: false,
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {

    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      })
    // return {
    //   inputs: initialState.inputs,
    //   users: state.users.concat(action.user)

    // }
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);// user 아이디로 값을 찾아서 반전시킨다.
        user.active != user.active;
      })
    // return {
    //   ...state,
    //   users: state.users.map(
    //     user => user.id === action.id ? { ...user, active: !user.active } : user)
    // }
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findindex(user => user.id === action.id);
        draft.users.splice(index, 1)//index부터 하나씩 제거하겠다.
      })
    // return {
    //   ...state,
    //   users: state.users.filter(
    //     user => user.id !== action.id)  //일치하지않으면 유지하고 일치하면은 제거하겠다.
    // }
    default:
      return state;
  }
}

export const UserDispatch = createContext(null);//기본값은 필요가 없기 때문에 null 이라고 설정을 해준다.


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [form,onChange,reset]=useInputs({
  //   username:'',
  //   email:''
  // })
  // const {username,email}=form;
  const { users } = state;
  // const nextId = useRef(4);



  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();//reset은 onCreate을 할때 진행한다.

  // }, [username, email,reset]);
  //reset을 넣은 이유는 eslint규칙상 넣어야한다.

  // const onToggle = useCallback((id) => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   })
  // }, []);//컴포넌트를 만들때만 사용하고 계속해서 재사용을 할수있기 때문에 deps을 사용하지않아도 된다.
  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   })
  // }, []);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (

    <UserDispatch.Provider value={dispatch}>{/**value의 값으로 위 상단에있는 function App에 선언한 useReducer을 사용해서 받아온 dispatch값을 사용한다. */}
      <CreateUser
      // username={username}
      // email={email}
      // onChange={onChange}
      // onCreate={onCreate}
      />
      <UserList
        users={users} />
      <div>
        활성사용자의 수 : {count}
      </div>

    </UserDispatch.Provider>

  )
  //useReducer && useState


  /** return (
  //   // <Counter />
  // ) 
 
  // return (
  //   <Wrapper>
  //     <Hello name='react' color='red' isSpecial={true}/>// 기본값은 true이다.
  //     <Hello color='pink' />
  //   </Wrapper>


  // )*/
}

export default App;

// import React, { useRef, useState ,useMemo,useCallback} from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';


// function countActiveUsers(users) {
//   console.log('활성사용자수를 세는 중..');
//   return users.filter(user => user.active).length;
// }
// const initialStata={
//   inputs:{
//     username:'',
//     email:'',
//   },
//   users:[
//     {
//       id: 1,
//       username: 'kim',
//       email: 'abx@naver.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'park',
//       email: 'zxc@gmail.com',
//       active: true,
//     },
//     {
//       id: 3,
//       username: 'lee',
//       email: 'zxczc@gmail.com',
//       active: false,
//     }
//   ]

// }
// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   });
//   const { username, email } = inputs;
//   const onChange =useCallback( e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value /**여기서 name은 username와 email이다. */
//     });
//   },[inputs]);//onChange함수는 inputs가 바뀔때 에만 함수가 새로 만들어지고
//   // 아닐때에는 이전의 값을 그대로 사용한다.

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'kim',
//       email: 'abx@naver.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'park',
//       email: 'zxc@gmail.com',
//       active: true,
//     },
//     {
//       id: 3,
//       username: 'lee',
//       email: 'zxczc@gmail.com',
//       active: false,
//     }
//   ]);

//   /**push splice sort등은 원본 배열을 바꾸기 때문에 사용하지 않는것이 좋다. */
//   /**spread 연산자를 사용하여 원본 배열을 복사한 후 사용한다. */


//   const nextId = useRef(4);
//   /** 이 값이 바뀔때 만다 굳이 rerender할 필요가 없기 때문에 useRef을 사용하여 변수로 관리를 함*/
//   /**useRef는 특정 dom을 선택하고 싶을 때 사용할수있지만, 어떤한 변수를 기억하고 싶을때 ,rerendering되어도 계속 기억된다. */
//   /**component가 rerender되어도 useRef(4)는 4 이다.*/
//   const onCreate =useCallback( () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email,

//     };
//     // setUsers([...users,user]);
//     setUsers(users=>users.concat(user));
//     //setUsers에 등록한 콜백함수의 파라미터 users에서 최신users을 조회하게 된다.
//     //따라서  deps에 users을 제거해도된다.
//     // 그렇게 되면 onCreate함수는 username과 email이 바뀔때에만 재렌더링이된다.
//     /** concat함수를 사용한다. */
//     setInputs({
//       username: '',
//       email: ''
//     });
//     console.log(nextId.current)//4
//     nextId.current += 1; /** useRef의 값을 조회하여 바꾸게 되면 이값도 바뀌게 된다. 이 값이 바뀐다고 component가 rerender되지 않는다.*/
//   },[username,email]);
//   //useCallback내부에서 사용하는 상태 또는,props로 받는 값들이 있다면 모두deps에 넣어주어야한다.
//   //[username,email,users];

//   const onRemove = useCallback(id => {
//     setUsers(users=>users.filter(user => user.id !== id));
//   },[]); //onRemove함수는 컴포넌트가 만들어질때 딱한번만 만들고, 렌더링될때만 사용되고 이후에는 계속 전에있는 값만을 재사용한다.

//   const onToggle = useCallback(id => {
//     setUsers(users=>users.map(
//       user => user.id === id ? { ...user, active: !user.active } : user
//     ))
//   },[]);

//   const count =useMemo(()=>countActiveUsers(users),[users]);//이함수는 users가 바뀔때에만 호출되고 아닐때에는 이전에의 값을 그대로 사용한다.
//   //useMemo를 사용하면 필요한 연산을 필요할때만 사용할수있다.
//   //useMomo는 사용한 함수를 재사용할수있다.
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate} />
//       <UserList users={users} ak={onRemove} onToggle={onToggle} />
//       <div>활성사용자의 수 : {count}</div>
//     </>
//   )

//   /** return (
//   //   // <Counter />
//   // ) 

//   // return (
//   //   <Wrapper>
//   //     <Hello name='react' color='red' isSpecial={true}/>// 기본값은 true이다.
//   //     <Hello color='pink' />
//   //   </Wrapper>


//   // )*/
// }

// export default App;
