import React ,{createContext,useContext,useState} from 'react';

const MyContext = createContext('defaultValue');//contextApi
//MyContext.Provider을 통해서 value의 값을 설정해주었다.
//MyContext와 같은 변수를 어디에서든 선언하고 import해서 사용할수있다.
//context을 만들때에는 createContext을 사용하고 안에 들어가는 파라미터는 기본값이다.
//createContextdㅢ 파라미터는 Provider가 사용되지않을때의 기본값을 의미함
//만약 기본값을 설정하고싶다면 Mycontext에있는 Provider의 value값을 통해서 설정한다.

function Child(){
  const text=useContext(MyContext);
  //useContext는 MyContext에 있는 값을 가져와서 읽을 수있게 해주는 
  //리액트 내장된 훅이다.text값을 그대로 사용할수있게 된다.
return <div>안녕하세요{text}</div>
}
function Parent({text}){
  return <Child text={text}/>
}
function GrandParent({text}){
  return <Parent text={text}/>

}
function ContextSample(){//context가장 최상단에 위치함
  const [value,setValue]=useState(true);
  return (
    <MyContext.Provider value={value?'GOOD':'BAD'}>{/**MyContext.Provider을 통해서 value의 값을 설정해주었다. */}
      <GrandParent />
      <button onClick={()=>setValue(!value)}>Click me</button>
    </MyContext.Provider>
  
  )
}
export default ContextSample;