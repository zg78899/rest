import { createStore } from 'redux';//단일 store을 코드안에 정의해준다.
import {createStore} from 'redux';
import { functionExpression, tsConstructSignatureDeclaration } from '@babel/types';

const INITIAL_STATE = {//초기값을 지정해줌
  counter: 0,
  text: '',
  list: []
};
const INITIAL_STATE={
  count:0,
  text:'',
  list:[]
}

//상수에 저장함 유지보수의 측면에서 좋다. 상수로 정의하여 사용하지안흔경우에는 값이 변할때 일일이 하나씩 변한 값을 수정해주어야한다.
const INCREASE='INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const INCREASE='INCREASE';
const DECREASE='DECREASE';
const CHANGE_TEXT='CAHANGE_TEXT';
const ADD_TO_LIST='ADD_TO_LIST';


const increse = () => ({ //액션 생성자 함수를 생성했다.화살표함수로 사용하는 경우가 많다.
  type:INCREASE
});

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

const increse=()=>({
  type:INCREADE
});
const decrase=()=>({
  type:DECREASE
});
const changeText=(text)=>({
  type:CHANGE_TEXT,
  text

});
const addToList=(item)=>{
  type:ADD_TO_LIST,
  item
}

function reducer(state = INITIAL_STATE, action) {
  //state에 기본값(초기값)을 설정한다.redux에서 초기상태를 만들때 reducer을 한번 호출한다.
  // 근데 그시점에 state가 undefined이면 deafult return undefined 되면서 초기상태가 만들어지지 않는다.
  // 그래서 state에서 undefined일때 INITIAL_STATE을 출력하게끔 초기값을 설정해준다.
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)//불변성을 유지해줘야한다.
      }

    default:
      return state;

  }
}

function reducer(state=INITIAL_STATE,action){
  switch(action.type){
    case INCREASE:
      return {
        ...state,
        count:state.count+1
      };
      case DECREASE:
        return {
          ...state,
          count:state.count-1
        }
        case CHANGE_TEXT:
          return {
            ...state,
            text:action.text
          }
          case ADD_TO_LIST:
            return {
              ...state,
              item:state.list.concat(action.item)
            }
            default:
              return state;
          

  }

}

const store=createStore(reducer);//store가 만들어짐
console.log(store.getState());//store.getState()는 현재 store안에 있는 상태를 조회한다.

const store=createStore(reducer);
console.log(store.getState());

const listener = () =>{
  const state = store.getState();
  console.log(state);
}
const listener=()=>{
  const store=store.getState();
  console.log(state);
}
const unsubscribe=store.subscribe(listener);
const unsubscribe = store.subscribe(listener);//store에 구독한다.
// unsubscribe();//구독을 해제하고싶은 경우에는 unsubscribe을 호출한다.//store.subscribe하면 unsubscribe라는 함수를 반환한다.

store.dispatch(increse());//구독을 하고나서 action들을 dispatch한다. action이 dispatch할 때마다  subscribe 함수가 호출된다.console.log()가 출력이 된다.
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id:1,text:'와우'}));

//store.dispatch({ type: 'INCRESE' });하면 dispatch가 되면서 reducerrk 한번 호출되고,store의 상태가 업데이트 되고나서
//우리가 구독했던 listener가 호출된다. const unsubscribe = store.subscribe(listener)
//store.dispatch({type:CHANGE_TEXT,text:'gpdgldl});
//store.dispatch({type:ADD_TO_LIST,item:{id:2,text:'hihihi}});

window.store=store;
// window.unsubscribe=unsubscribe;//을 호출하면 unsubscribe()로 호출하면 console.log는 호출되지않는다. 그러나 store.getState()하면 상태는 변해 있다는 것을 확인할수있다.

//subscribe라는 함수는 사용하지않고 getState를 사용해 직접접근하는 방식은 많이 사용하지않는다.
//connet,u seSelect 헬퍼 함수를 사용하여 react와 redux을 연동한다.


