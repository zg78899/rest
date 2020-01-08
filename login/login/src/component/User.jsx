import React,{useEffect} from 'react';
// import {useAuthed} from '../lib.hooks';

const User=(props)=>{
  // useEffect(()=>{
  //   const authed =useAuthed();
  // },[]);
  // userAuthed();
  return (
    <>
    <div>로그인되었습니다.</div>
    <button onClick={()=>props.historty.push('/')}></button>
    </>
  )

}
export default User;
