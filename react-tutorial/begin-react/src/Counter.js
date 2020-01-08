import React, { useReducer } from 'react'; /*리액트에서 동적으로 상태를 변경시키는 useState을 가져오겠다. */ 


function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      // return state;
      throw new Error('unhandled action');
  }
}

function Counter() {
  // const [number,setNumber]=useState(0);/**number라는 상태를 만들건데 이상태의 기본값을 0으로 하고/setNumber는 현재상태를 바꿔주는(업데이트) 함수이다.  */
  // const numberState=useState(0);//useState을 호출하게되면 배열을 반환하게 되는데 첫번째 원소를 number두뻔째 원소를 setNumber로 추출하겠다.
  // const number=numberSate[0];
  // const setNumber=numberSate[1];// 아래의 값을 비구조화 할당을 사용하여  위의 코드와 같이 사용하였다.
  const [number,dispatch]=useReducer(reducer,0);


  const onIncrease = () => {
    dispatch({
      type:'INCREMENT'
    })
    // setNumber(prevNumber => prevNumber + 1)// prevNumber는 이전의 값을 박아서 바꾸겠다는 함수의 로직으로 나타내게된다.함수형 업데이트(최적화와 관련이있다.)
    // setNumber(number+1);// number은 위의 갑을 참조하여 바꾸겠다.
  }
  const onDecrease = () => {
    dispatch({
      type:'DECREMENT'
    })
    // setNumber(prevNumber => prevNumber - 1)
    // setNumber(number-1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
export default Counter;
