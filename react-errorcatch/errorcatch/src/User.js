import React from 'react';

function User({ user }) {
  if (!user) return null;//하지안으면 App컴포넌트의 <user>밑에있는 내용은 보이지게 된다.
  //error을 발생하지않게하기위한 방법
  return (
    <div>
      <div>
        <b>Id</b>:{user.id}
      </div>
      <div>
        <b>USERNAME</b>:{user.username}
      </div>
    </div>
  )
}
export default User;


function work(callback){
  setTimeout(()=>{
    const start=Date.now();
    for(let i=0;i<10000;i++){}
    const end=Date.now();
    console.log(start-end+'걸렸습니다.')
  },0);
};
console.log('작업을 시작합니다.');
work(()=>{
  console.log('작업이 끝났습니다.')
});
console.log('다음 작업 ㄱㄱ');


