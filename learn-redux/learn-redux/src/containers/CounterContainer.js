import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';//상태를 조회할때 useSelector을 사용한다.//usedispatch는 dispatch 할때 사용하는 hooks
import { increase, decrease, setDiff } from '../modules/counter';



function CounterContainer({
  number,
  diff,
  // onIncrease,
  // onDecrease,
  // onSetDiff
  increase,
  decrease,
  setDiff,
  //connect는 hook과는 달리 props를 사용하여 다음과 같이 사용한다.
  
}) {
  return (
    
    <Counter
      number={number}
      diff={diff}
      // onIncrease={onIncrease}
      // onDecrease={onDecrease}
      // onSetDiff={onSetDiff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  )
}

const mapStateToProps=(state)=>({
  number:state.counter.number,
  diff:state.counter.diff
});

// const mapDispatchToProps=(dispatch)=>bindActionCreators({
//   increase,
//   decrease,
//   setDiff
//   // onIncrease:()=>dispatch(increase()),
//   // onDecrease:()=>dispatch(decrease()),
//   // onSetDiff:(diff)=>dispatch(setDiff(diff))
// },dispatch)

const mapDispatchToProps={
  increase,
  decrease,
  setDiff
 
}//mapDispatchToProps가 함수가 아니라 객체라면 bindActionCreator를 자동으로 되므로 사용하지않아도 된다.
// 함수가아니라 객체라면 connect내부에서 자동으로  bindActionCreator가 실행된다.

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
// const enhance=connect(mapStatetoProps,mapStatetoProps);
// export default enhance(CounterContainer);
