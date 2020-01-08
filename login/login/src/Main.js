import React from 'react';


function Main(props){
  return (
    <>
    <div>
      <button onClick={()=>props.history.push('/siginin')}>로그인</button>
      <button onClcik={()=>props.history.push('/signup')}>회원가입</button>
    </div>
    </>
  )

}
export default Main;