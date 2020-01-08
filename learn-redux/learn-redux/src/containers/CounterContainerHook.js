import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch ,shallowEqual} from 'react-redux';//상태를 조회할때 useSelector을 사용한다.//usedispatch는 dispatch 할때 사용하는 hooks
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  const { number, diff } = useSelector(
    state => ({//store.getState하는 값들이 state의 상태로 들어간다. state는 redux의 현재 상태
    //useSelector의 결과물은 number와diff을 선택한 객체가 된다.
    number: state.counter.number,
    diff: state.counter.diff
    //selector엣 매번 새롭게 렌더링한다.useselect 을 조회할때마다 하나의 상태만을 조회한다.
  }),
  shallowEqual//최적화 할때 사용, 그러나 객체안에 모든값을 비교하는 것은 아니다.
  //렌더링을 할때나 ,렌더링이 빈번하게 발생할때 shallowEqual을 사용한다.
  // (left,right)=>{
  //   return left.diff === right.diff && left.number == right.number
  );
  // const number=useSelector(state=>state.counter.number);//최적화를 위해 useSelector가 하나의 상태만을 조회하게 만들어 줬다.
  // const diff=useSelector(state=>state.counter.diff);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());//액션 생성 함수들이 호출이 되면 dispatch된다.
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));//diff을 파라미터로 받아와서 dispatch해준다. setDiff(diff)을 받아서 파라미터로 받은 diff을 넣어준다.

  //Counter에게 하나하나 전달해준다.
  return (
    
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}
export default CounterContainer;
//컨테이너 컴포넌트에서는 상태관리를 중점적으로 한다.
// 컨테이넌 컴포넌트에서 리덧스 스토어의 상태를 불러오고
// 함수가 호출되면 액션 디스패치하는 방식