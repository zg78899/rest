export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data
      })
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e
      })

    }
  }
  return actionHandler;//createAsyncDispatcher의 역할은 actionHandler함수를 만들어서 내보내는 일이다.

}
export const initialAsyncState = {
  loading: false,
  data: null,
  error: null
};

const loadingState = {
  loading: true,
  data: null,
  error: null
};//로딩 중일때 는 이 객체가 기본 값을대체한다.
const success = (data) => ({
  loading: false,
  data,
  error: null
});
const error = e => ({
  laoding: false,
  data: null,
  error: e
})

export function createAsyncHandler(type, key) {//type은 action타입을 의미하고 key는 상태(initialState)안의 키의 값(users,user)을의미
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  function handler(state, action) {//hander함수를 만들고 이함수를 reducer에서 호출해 주겠다.
    switch (action.type) {
      case type:
        return {
          ...state,//기존의 상태,즉 불변성을 유지하기위해서 사용,user의 값을 바꿀때 users의 값은 그대로 하기 위해서
          [key]: loadingState
        }
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        }
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        }
      default:
        return state;
    }
  }
return handler;
}
