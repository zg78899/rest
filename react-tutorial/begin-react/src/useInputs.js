import {useState,useCallback,useReducer} from 'react';
//useInputs라는 커스텀 훅을 만들었다.
function reducer(state,action){
  switch(action.type){
    case 'CHANGE':
      return {
        ...state,
        [action.name]:action.value
      };
      case 'RESET':
        return Object.keys(state).reducer((acc,current)=>{
          acc[current]='';
          return acc;
        },{});
        default :
        return state;ㄴ
  }
}
function useInputs(initialForm){
  const [form,dispatch]=useReducer(reducer,initialForm);
  //change
  const onChange=useCallback(e=>{
    const {name,value}=e.target;
    dispatch({type:'CHANGE',name,value});
  },[]);

  const reset= useCallback(()=>dispatch({type:'RESET'}),[]);

  return [form,onChange,reset];

}
export default useInputs;


// function useInputs(initialForm){

//   const [form,setFrom]=useState(initialForm);
//   const onChange =useCallback((e)=>{
//     const [name,value]=e.target;
//     setFrom(form =>({...form,[name]:value}));
//   },[]);
//   const reset=useCallback(()=>setFrom(initialForm),[initialForm]);
//   return [form,onChange,reset];
// };
// export default useInputs;
