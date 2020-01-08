import {useEffect,useReducer,useCallback} from 'react';


function reducer(state,action){
  switch(action.type){
    case 'LOADING':
      return {
        loading:true,
        data:null,
        error:null
      }
    case 'SUCCESS':
      return {
        laoding:false,
        data:action.data,
        error:null
      }
    case 'ERROR':
      return {
        loading:false,
        data:null,
        error:action.error
      }
    default:
       throw new Error(`UnHandled action type :${action.type}`);

  }
}
function useAsync(callback,deps=[],skip=false){//callback은 api을 호출하는 함수를 넣어줄것,deps는 useEffect에서 사용하는 두번째 파라미터를 그래도 받아와서 사용할것이다.
  const [state,dispatch]=useReducer(reducer,{
    loading:false,
    data:null,
    error:null

  });
  const fetchData = useCallback(async ()=>{
    dispatch({type:'LOADING'});
    try{
      const data = await callback();
      dispatch({type:'SUCCESS',data})

    }catch(e){
    dispatch({type:'ERROR',error:e})
    }
  },[callback])

  useEffect(()=>{
    if(skip){
      return 
    }
    fetchData();
    //eslint-disable-next-line
  },deps);
  return [state,fetchData];//useAsync을 통해서 첫번재 값으로는 state을 가져올수있고,두번쩨값으로는 특정요청을 다시시작ㄴ하는 함수를 받아와서 사용할수있다.

}
export default useAsync;