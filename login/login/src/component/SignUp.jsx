import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {signUp} from '../lib/api';

const SignUp = (props) => {
  const {handleSubmit, register, errors, watch} = useForm();
  const [alreadyExist, setAlreadyExist]= useState(false);

  const onSubmit = async values => {
    const { success, msg } = await signUp(values);
    if (success) {
      props.history.push('/signin');

    } else if (msg === 'Username already exists.') {
      setAlreadyExist(true);
    }
    console.log();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userid">
          Email:
      <input
            id="userid"
            name="username"
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
            placeholder="이메일을 입력해주세요" />
        </label>
        {errors.username && errors.username.message}
        

        <br />
        <label htmlFor="password1">
          password:
        <input
            id="password1"
            name="password1"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            ref={register({
              required: 'Required',
            })}
          />
        </label>
        <br />
        <label htmlFor="password2">
          re passsword :
        <input
            id="password2"
            name="password2"
            type="password"
            placeholder="비밀번호을 확인하세요"
            ref={register({
              required: 'Required',
              validate: (value) => {
                return value === watch('password1');
              }
            })}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        {errors.password2 && '비밀번호가 일치하지않습니다.'}
        {alreadyExist && '이미존재하는 아이디입니다.'}
      </form>
    </div>
  )

}
export default SignUp;
