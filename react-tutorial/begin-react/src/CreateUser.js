import React, { useRef, useContext } from 'react';
import UserDispatch from './App';
import useInputs from './useInputs';

const CreateUser = () => {//필요한 값들을 props로 받아옴
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  })

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username} />

      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email} />

      <button onClick={onCreate}>등록</button>
    </div>
  )
}
export default React.memo(CreateUser);//React.memo을 해주면  props가 바뀌었을때만 렌더링해준다.

