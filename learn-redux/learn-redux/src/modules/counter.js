const SET_DIFF = 'counter/SET_DIFF';//ducks패턴을 사용하는경우 문자열 앞에 접두사를 다른 모듈과 중뵥을 막기 위해
const INCREASE='counter/INCREASE';
const DECREASE='counter/DECREASE';

export const increase=()=>({type:INCREASE});
export const decrease=()=>({type:DECREASE});
export const setDiff=diff=>({type:SET_DIFF,diff});//diff는 한번에 증가시킬 숫자를 의미한다.

const initialState ={
  number:0,
  diff:1
}

export default function counter(state=initialState,action){
  switch(action.type){
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff//action생성함수에 있는 diff을 받아서 더해주겠다.
      }
      case INCREASE:
        return {
          ...state,
          number: state.number + state.diff
        }
        case DECREASE:
          return {
            ...state,
            number:state.number - state.diff
          }
      default:
        return state;
  }

}