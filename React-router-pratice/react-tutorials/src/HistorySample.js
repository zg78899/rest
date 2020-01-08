import React, { useEffect } from 'react';

function HistorySample({history}){
const goBack=()=>{
  history.goBack();
}
const goHome=()=>{
  history.push('/');// 기존의 방문기록이 남지만 
}
// const replaceToHome=()=>{//replaceToHome은 방문기록이 남지않는다.
//   history.replace('/');
// }

useEffect(()=>{//컴포넌트가 unMunt 할때 이탈 방지를 비활성화 하겠다.
  console.log(history);
  const unblock=history.block('정말 떠나실 건가요?');
  return ()=>{
    unblock();
  }
  
},[history])
  return(
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      {/* <button onClick={goHome}>홈으로(Replace)</button> */}

    </div>
  )

}
export default HistorySample;

