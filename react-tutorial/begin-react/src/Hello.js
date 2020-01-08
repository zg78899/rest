import React from 'react';

function Hello({color,name,isSpecial})  {
  console.log(props)

  return <div style={{color}}>

    {isSpecial && <b>*</b>}{/**조건부 렌더링을 하는 방법은 1.3항 연산자를 사용하는방법 2. 단축평가를 사용하는 방법*/}
    안녕하세요 {name}
    </div>;
  
}
Hello.defaultProps={
  name:'이름없음'
}
export default Hello;
