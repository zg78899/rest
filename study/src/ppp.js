import React, { useEffect, useReducer, useContext, Component, forwardRef } from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" color="red" />
    <Hello color="pink" />
  )
}
export default App;

import React from 'react';

function Hello({ name, color }}) {
  return <div style={{ color }}>안녕하세요{name}</div>
}
Hello.defaultProps = {
  name: '이름 없음'
}
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    paddin: '16px'
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}
export default Wrapper;


import React from 'react';
import hello from '.Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  )
}
export default App;


import React, { useState } from 'react';

function Counter() {
  const [state, setState] = useState(0);
  const state = useState[0];
  const setState = useState[1];

  const onIncrease = () => {
    setState(prevNumber => prevNumber + 1);//기존의 값을 어떻게 업데이트 할것인지에 대한 함수형 업데이트

  }
  const onDecrease = () => {
    setState(prevState => prevState - 1);//다음 상태를 넣어주는 것이 아니라 값ㅇ르 업데이트 하는 함수를 파라미터로 넣어준었다.

  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
export default Counter;

import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  )
}
export default App;

import React, { useState, useRef, useMemo } from 'react';

function inputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',

  })
  const nameInputs = useRef();
  //useRef를 사용하여  Ref객체를 만들고  이 객체를 우리가 선택하고 싶은 DOM 에 설정해 주어야 한다.
  //그러면 Ref rorcpdml .current 값은 우리가 원하는DOM을 가르키게 됩니다.



  const { name, nickname } = inputs;


  const onChange = e => {
    const { value, name } = e.target;//input 의 name과 value값을 e.target에서 추출한다
    setInputs({
      ...inputs,
      [name]: value//inputs[name]처럼 값을 직접적으로 바꿔서는 안된다.
      // 기존의 상태를 직접 바꾸게 되면은 값을 바꿔도 리렌더링 되지 않는다.

    })


  };
  const onReset = () => {
    setInputs({
      name: '',
      nickanme: '',

    })
    nameInputs.current.focus();
    //onReset함수에 Ref을 설정해준이유는 초기화했을때 포커스가 인풋에 잡히게 하기 위해서 사용하였다.
  }
  return (
    <div>
      <input ref={nameInputs} name="name" placeholder="이름" onChange={onCahnge} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  )
}
export default inputSample;

import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  )
}

const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public@naver.com'
  },
  {
    id: 2,
    username: 'testor',
    email: 'abc@naver'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@naver.com'
  }
];

import React from 'react';

function User({ user }) {//UsersList에서 유저한명을 props로 받음
  return (
    <div>
      <b>{user.username}</b><span>({user.email})</span>
    </div>
  )

}

function UsersList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public@naver.com'
    },
    {
      id: 2,
      username: 'testor',
      email: 'abc@naver'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@naver.com'
    }
  ];

  return (
    <div>
      {/* <div>
        <b>{users[0].username}</b><span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b><span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b><span>({users[2].email})</span>
      </div> */}
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/> */}배열의 인덱스를 하나하나 조회하면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못한다.
      동적인 배열을 렌더링해야 할때 우리는 자바스크립트의 내장함수인 map을 사용해야한다.
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )

}
export default UserLists;


import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import createUser from './createUser';
import useInputs from './useInputs'

function countActiveUsers(users) {
  console.log('활성 사용자수를 세는 중...');
  return users.filter(user => user.active).length

};



function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',

  })
  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public@naver.com'
    },
    {
      id: 2,
      username: 'testor',
      email: 'abc@naver'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@naver.com'
    }
  ]);
  const nextID = useRef(4);// useRef()를 사용하여여 파라미터를 넣어주면 이값이 .current값의 기본값이 됩니다.
  // 이 값을 수정할때에는 .current값을 수정하면 되고 조회할때에는 .current를 조회하면 됩니다.
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user]);
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: '',
    })
    //나중에 구현할 배열에 항목 추가하느 로직
    nextID.current += 1;
  }, [username, eamil]);// 상태 또는 props가 있다면 반드시 useCallback의 deps에 넣어주어야한다.
  //또한 props로 받아오 함수가 있다면 반드시 deps에 써주어야한다.


  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));

  }, []);

  const onToggle = useCallback((id) => {
    setUsers(users =>
      users.map(user
        => user.id ? { ...user, active: !user.active }
          : user
      )
    );

  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <createUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자의 수:{count}</div>
    </>
  )
}
export default App;


import React from 'react';
import {UserDispatch} from './App';


const User = React.memo(function User({ user }) {
  const dispatch=useContext(UserDispatch);
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);

  //   return () => {
  //     console.log('user가 바뀌기 전');
  //     console.log(user);

  //   }

  // }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer'
        color: user.active ? 'green' : 'black'
        }}
        // onClick={() => onToggle(users.id)}
        onClick={() => dispatch({type:'TOGGLE_USER',id:user.id})}
      >

        {user.username}
      </b>
      &nbsp;
      <span>
        {user.email}
      </span>
      {/* <button onClick={() => onRemove(user.id)}>삭제</button> */}
      <button onClick={() => dispatch({type:'REMOVE_USER',id:user.id})}>삭제</button>
    </div>
  )

})
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
           />
      ))}
    </div>
  )
}
export default React.memo(UserList);

import React,{useRef,useContext} from 'react';
import useInputs from './useInputs';


function createUser({ username, email, onChange  }) {
  const [{username,emial},onCahnge,reset]=useInputs({
    username:'',
    email:''
  });
  const nextId=useRef(4);
  const deispatch=useContext(UserDispatch);

  const onCreate=()=>{
    dispatch({
      type:'CREATE_USER',
      users:{
        id:nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current+=1;

  }
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={uername}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onCahnge}
        value={email} />
      <button onClick={onCreate}>등록</button>

    </div>

  )
}
export default React.memo(createUser);


import React, { useState } from 'react';
import { functionTypeAnnotation } from '@babel/types';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(prevState => prevState + 1)}>+1</button>
      <button onClick={() => setNumber(prevState => prevState - 1)}>-1</button>
    </div>
  )
}

const [state, dispatch] = useReducer(reducer, initalState);

function reducer(state, action) {
  return nextState;

}

import React, { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;

  }
}
function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncease = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });

  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncease}>+1</button>
      <button onClick={onDecrease}>-1</button>

    </div>
  )

}

import React, { useRef, useState, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUsers';
import useInputs from './useInputs';

function App() {
  const countAcitveUsrs = (users) => {
    return users.filter(user => user.acitve).length
  }
  const initialState = {
    inputs: {
      username: '',
      email: ''
    },
    users: [
      {
        id: 1,
        username: 'velopert',
        email: 'public@naver.com'
      },
      {
        id: 2,
        username: 'testor',
        email: 'abc@naver'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@naver.com'
      }

    ]
  };

  function reducer(state, action) {
    switch (action.type) {

      // case 'CHANGE_INPUT':
      //   return {
      //     ...state,
      //     inputs: {
      //       ...state.inputs,
      //       [action.name]: action.value
      //     }
      //   }

      case 'CREATE_USER':
        return {
          inputs: initialState.inputs,
          users: state.users.concat(action.user)
        }
      case 'TOGGLE_USER':
        return {
          ...state,
          user: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user);

        }
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        }
      default:
        return state;
    }

  }
  export const UserDispatch = React.createContext(null);

  function App() {
    const [{ username, email }, onChange, reset] = useInputs({
      username: '',
      email: ''
    })
    const [state, dispatch] = useReducer(reducer, initalState);
    const nextId = useRef(4);
    const { users } = state;
    // const { username, email } = state.inputs;


    // const onChange = (e) => useCallback({
    //   const { name, value } = e.target
    //   dispatch({
    //     type:'CHANGE_INPUT',
    //     name,
    //     value })

    // }, []);
    const onCreate = useCallback(() => {
      dispatch({
        type: 'CREATE_USER',
        user: {
          id: nextID.current,
          username, email
        }
      })
      reset();
      nextId.current += 1;
    }, [username, email, reset]);

    // const onRemove = useCallback((id) => {
    //   dispatch({
    //     type: 'REMOVE_USER',
    //     id
    //   })
    // }, []);
    // const onToggle = useCallback(() => {
    //   dispatch({
    //     type: 'TOGGLE_USER',
    //     id
    //   })
    // // }, [])

    const count = useMemo(() => countAcitveUsrs(user), [users]);

    return (
      <>
        <UserDispatch.Provider>
          <CreateUser
            username={username}
            email={email}
            onCahnge={onChange}
            onCreate={onCreate}
          />
          <UserList
            users={users}
            />
          <div>활성 사용자수 :{count}</div>
        </UserDispatch.Provider>
      </>
    )
  }
}

import { useState, useCallback } from 'react';

function useInputs(initalForm) {

  const [form, setForm] = useState(initalForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initalForm), [initalForm]);

  return [form, onChange, reset];

}
export default useInputs;

import { useReducer, useCallback } from 'react';
import { resetWarningCache, element } from 'prop-types';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      };
    case 'RESET':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;

  }
}
function useInputs(initalFrom) {

  const [form, dispatch] = useReducer(reducer, initalFrom);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', name, value });
  }, []);

  const reset = useCallback(() => dispatch({ type: 'REST' }), []);
  return [form, onChange, reset];//배열 구조 분해
}
export default useInputs;


case 'RESET':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;

class CustomTextInput extends React.Component{
  constructor(props){
    super(props);

    this.textInput=null;

    this.setTextInputRef=element=>{
      this.textInput=element;
    };
   this.focusTexxInput=()=>{
     if(this.textInput) this.textInput.focus();
   }
  }
  componentDidMount(){
    this.focusTextInput();
  }
  render(){
    return (
      <div>
        <input
        type="text"
        ref={this.setTextInputRef}/>
        <input 
        type="button"
        value="Focus the text next"
        onClick={this.focustexxInput}/>
      </div>
    )
  }

}

function CustomTextInput(props){
  return (
    <div>
      <input ref={props.inputRef}/>
    </div>
  )
}
class Parent extends React.Component{
  render(){
    return(
      <CustomTextInput inputRef={el=>this.inputElement=el}/>
    )
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // DOM API를 사용하여 text 타입의 input 엘리먼트를 포커스합니다.
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 마운트 되었을 때 자동으로 text 타입의 input 엘리먼트를 포커스합니다.
    this.focusTextInput();
  }

  render() {
    // text 타입의 input 엘리먼트의 참조를 인스턴스의 프로퍼티
    // (예를 들어`this.textInput`)에 저장하기 위해 `ref` 콜백을 사용합니다.
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  render(){
    return <div ref={this.myRef}></div>
  }
}
const node =this.myRef.current//render 메서드 안에서 ref가 엘리먼트에게 전달되었을때 그 노드를 향항 참조는 ref의currnet의 어트리뷰트 에 담기게 된다.
//ref의 값은 노드의 유형에 따라 다르다.
//DOM 노드에 대한 참조를 저장하기 위해서 ref을 사용합니다.
class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput=React.createRef();
    this.foucsTextinput=this.focusTextInput.bind(this);
  }
  focusTextInput(){
    this.textInput.current.focus();
  }
  render(){
    return (
      <div>
        <input
        type="text"
        ref={this.textInput}
        />
        <input
        type="button"
        value="Focus the text input"
        onClcik={this.foucsTextinput}/>
      </div>
    )
  }
}
class CoustomRef extends React.Component{
  constructor(props){
    super(props);
    this.textInput=React.createRef();
    this.focusTextinput =this.focusTextinput.bind(this)
    
  }
  focusTextinput(){
    this.textInput.current.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.textInput}/>
        <input type="button" value="Focus is the textinput" onClick={this.focusTextinput}/>
      </div>
    )
  }
}
//ref를 수정하는 작업은 componentDidMunt 또는 componentDidUpdate 생명주기 메서드가 호출 되기 전에 이루어집니다.


class AutoFoucsTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput=React.createRef();

  }
  componentDidMount(){
    this.textInput.current.focusTextInput();

  }
  render(){
    return (
      <CustomTextInput ref={this.textInput}/>
    )
  }
}
function MyFouctionComonent(){
return <input/>
}
class Parent extends React.Component{
  construtor(props){
    super(props);
    this.textInput=React.createRef();
  }
  render(){
    return (
      <MyFouctionComonent ref={this.textInput}/>
    )
  }
}
//함수형 컴포넌트는 인스턴스가 없기 때문에 ref을 사용할수없다.

//DOM엘리먼트나 클래스 컴포넌트의 인스턴스로 접근하기위해서ref어트리뷰트를 함수 컴포넌트에서 사용할수있다.

function CustomTextInput(props){
  let textInput=React.createRef();

  function handleClick(){
    textInput.current.focus();

  }
  return (
    <div>
      <input type="text" ref={textInput}/>
      <input type="button" value="Foucs the text input" onClick={handleClick}/>
    </div>
  )
}
//ref 넘겨주기(forwarding)
const FancyButton =React.forwardRef((props,ref)=>(
  <button ref={ref}>{props.children}</button>
))

const ref=React.createRef();
<FancyButton ref={ref}>Click me</FancyButton>

function  logProps(WappedComponent){
  class LogProps extends React.Component{
    componentDidUpdate(prevProps){
    console.log('old props: ',prevProps);
    console.log('new props: ',this.props);
    
    }
    render(){
      return <WappedComponent {...this.props}/>
    }
  }
  return LogProps;

}

class FancyButton extends React.Component{
  focus(){

  }
}
export default logProps(FancyButton);

import FancyButton from './FancyButton';
const ref=React.createRef();
<FancyButton label="Click Me" handleClick={handleClick} ref={ref}/>

function logProps(Component){
  class LogProps extends React.Component{
    componentDidUpdate(prevProps){
      console.log('old props:',prevProps);
      console.log('new props:',this.props);
      
    }
    render(){
      const {forwardedRef,...redt}=this.props;
      return <Component ref={forwardedRef} {...rest}/>
    }
  }
  return React.forwardRef((props,ref)=>{
    return <logProps {...props} forwardedRef={ref}/>
  })
}

const WrappedComponent=React.forwardRef((props,ref)=>{
  return <LogProps {...props} forwardedRef={ref}/>
});

const WrappedComponent =React.forwardRef(
  function myFunction(props,ref){
    return <LogProps {...props} forwardedRef={ref}/>
  }
)

function logProps(Component){
  class LogProps extends React.Component{

  }
  function forwardedRef(props,ref){
    return <LogProps {...props} forwardedRef={ref}/>
  }
  const name=Component.displayName || Component.name;
  forwardedRef.displayName=`logProps(${name})`;

  return React.forwardRef(forwardRef);
}
class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput=null;

    this.setTextInput=element=>{
      this.textInput=element
    };
    this.focusTextInput=()=>{
      if(this.textInput) this.textInput.focus();
    };
  }
  componentDidMount(){
    this.focusTextInput();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.setTextInput}/>
        <input type="button" value="Foucs the text input"
        onClick={this.focusTextInput}/>
      </div>
    )
  }
}

class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput=null;
    
    this.setTextInput=element=>{
      this.textInput=element;

    };
    this.focusTextInput=()=>{
      if(this.textInput) this.textInput.focus();
    }
  }
  componentDidMount(){
    this.foucsTextinput();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.setTextInput}/>
        <input type="button" onClick={this.focusTextInput}/>
      </div>
    )
  }
}

function CustomTextInput(props){
  return (
    <div>
      <input ref={props.textInput}/>
    </div>
  )
}
class Parent extends React.Component{
  render(){
  return (
    <CustomTextInput inputRef={el=>this.inputElement=el} />
  )
  }
}

import {useState,useCallback} from 'react';
function useInputs(initalForm){
  const [form,setForm]=useState(initalForm);

  const onChange=useCallback((e)=>{
    const {name,value}=e.target;
    setForm(form=>({...form,[name]:value}));

  },[]);
  const reset=useCallback(()=>setForm(initalForm),[initalForm]);
  return [form,onChange,reset];

}
export default useInputs;

import React,{useRef,useReducer,useMemo,useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useinputs';

function countActiveUsers(users){
return users.filter(user=>user.active).length;

};
const initalState={
  users:[
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};
function reducer (state,action){
  switch(action.type){
    case 'CREATE_USER':
    return {
      users:state.users.concat(user)
    }
    case 'TOGGLE_USER':
      return {
        users:state.users.map(user=>{
          user.id ===action.id ?{...user,active:!user.active}:user;
        })
      }
      case 'REMOVE_USER':
        return {
          uesrs:state.users.filter(user=>user.id !== action.id)
        };
        default :
        return state

  }
}
function App(){
  const [{username,email},reset,onCahnge]=userInputs({
    username:'',
    email:''
  });
  const [state,dispatch]=useReducer(reducer,initalState);
  const nextId=useRef(4);
  const {users}=state;

  const onCreate=useCallback(()=>{
    dispatch({type:'CREATE_USER',
  user:{
    id:nextId.current,
    username,eamil
  }});
  reset();
  nextId.current+=1;
  },[username,email,reset]);

  const onToggle=useCallback((id)=>{
    dispatch({
      type:'TOGGLE_USER',
      id
    });
  },[]);
  const onRemove=useCallback((id)=>{
    dispatch({
      type:'REMOVE_USER',
      id
    },[]);
  })
  const count=useMemo(()=>countActiveUsers(users),[users]);

  return (
    <>
    <CreateUser
    username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}
    />
    <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    <div>활성사요자 수 :{count}</div>
    </>
  )

}
export default App;

import {useReducer,useCallback} from 'react';

function reducer(state,action){
  switch(action.type){
    case'CHANGE':
    return {
      ...state,
      [action.name]:action.value
    };
    case 'RESET':
      return Object.keys(state).reducer((acc,current)=>{
        acc[current]='';
        return acc;
      },{});
      default:
        return state;
  }
};
function useInputs(initalForm){
  const [form,dispatch]=useReducer(reducer,initalForm);
  const onChange=useCallback(e=>{
    const {name,value}=e.target;
    dispatch({type:'CHANGE',name,value});
  },[]);
  const reset = useCallback(()=>dispatch({type:'RESET'}),[]);
  return [from,onChange,reset];
}
export default useInputs;


import {useReducer,useCallback} from 'react';

function reducer(state,action){
  switch(action.type){
    case 'CHAGNGE':
      return {
        ...state,
        [action.name]:action.value
      };
      case 'RESET':
        return Object.key(state).reducer((acc,current)=>{
          acc[current]='';
          return acc;
        },{})
      default:
        return state;
  }
}
function useinput(initalForm){
  const [form,setForm]=useReducer(resucer,initalForm);
  const onCahnge=useCallback((e)=>{
    const {value,tname}=e.target;
    dispatch({type:'CHANGE',name,value})
  },[]);
  const reset=useCallback(()=>dispatch({type:'RESET'}),[]);
  return [reset,onChange,form];
}
export default useInputs;

import {useState,useEffect} from 'react';
import axios from 'axios';

function Users(){
  const [users,setUsers]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  
  const fetchUsers=async ()=>{
    try{
      //요청이 시작할때
      setError(null);
    setUsers(null);
    setLoading(true);
    const response=await axios.get( 'https://jsonplaceholder.typicode.com/users');
    setUsers(response.data)

    }catch(e){
      setErrpr(e);
    }
    setLoading(false);
  };

  useEffect(()=>{
    fetchUsers();
  },[]);
  if(loading) return <div>로딩중입니다.</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!users) return null;
  return (
    <ul>
      {users.map(user=>{
        <li key={user.id} >{user.username} ({user.name})</li>
      })}
    </ul>
  )
}
export default Users;

import React from 'react';
import Users from './Users';

function App(){
  return <Users/>;
}
export default App;



