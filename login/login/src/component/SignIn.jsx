import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {signIn} from '../lib/api';
import Cookies from 'js-cookie';

const SignIn = (props) => {
  const {handleSubmit,register,errors,} = useForm();
  const [AlreadyExist] = useState(false);

  const onSubmit=async (values)=>{
    const {success,token } = await signIn(values);

    if(success){
      Cookies.set('session',token.split(' ')[1])
      props.history.push('/user')
    }
  }
    return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userid">
          ID :
          <input 
          id="userid"
          name="username"
          ref={
            register({
              required:'Required',
              pattern:{
              value :/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
              }
            })
          }
          placeholder="아이디를 입력하세요"/>
          {errors.username && errors.username.message}
        </label>
        <br/>
        <label htmlFor="password">
          Password :
          <input
          id="password"
          type="password"
          name="password"
          ref={
            register({
              required:'Required'
            })
          }
          placeholder="비밀번호를 입력하세요"/>
        </label>
        {errors.password && '비밀번호가 일치하지않습니다'}
        {AlreadyExist && '아이디가 이미 존재합니다.'}
        <br/>
        <button type="submit">Sign UP</button>
      </form>
      </>
    )
  }
export default SignIn;

