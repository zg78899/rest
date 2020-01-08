import React from 'react';
//presentationnal Component ui을 선언하는 것에 집중하고 필요한 값이 나 함수는 props로 받아서 사용한다.

function Counter({number,diff,onIncrease,onDecrease,onSetDiff}){
  const onChange = e => {
    onSetDiff(parseInt(e.target.value,10));
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
      <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
export default Counter;
