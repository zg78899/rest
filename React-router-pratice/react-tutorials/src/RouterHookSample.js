// import React from 'react';
import useReactRouter from 'use-react-router';// 아직 정식 탑재 되지않았기 때문에 써드파티 라이브러리를 사용하여야한다.npm i react-router-dom;

function RouterHookSample(){
  const {history,location,match}=useReactRouter();
  console.log({history,location,match});
  return null;


}
export default RouterHookSample;