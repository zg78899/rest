import React,{useState,useRef} from 'react'; /**useRef는 React에서 dom에 직접 접근하는 방법 */

function InputSample() {
  const [inputs,setInputs]=useState({
    name:'',
    nickname:'',
  });
  const nameInput=useRef();

  const {name,nickname}=inputs;

  const onChange = (e) => {
    const {name,value}=e.target;
     setInputs({
      ...inputs,
      [name]:value,//name:value라고 하면 문다열 그자체가 들어가게 된다.[name]:value 처럼 []을 사용하게 되면 키 값이 무언인지에 따라 다른 키 값이 달라진다.
      //name의 값은 name 될수도 nickname이 될수도있다
     });
    };
  //  console.log(e.target.name);
  //  console.log(e.target.value);
  const onReset=()=>{
    setInputs({
      name:'',
      nickname:'',
    });
    nameInput.current.focus();//current가 바로 dom을 가르키게 된다.
    //dom api중에서 focus()가 있다.호출하게 되면 focus가 잡히게 된다.

  };
  return (
    <div>
      <input
       name="name"
        placeholder="이름"
         onChange={onChange}
          value={name}
          ref={nameInput} /**우리가 직접 dom에 직접 접근할수잇게 된다 */
        />{/**setText의 값이 바뀌게 되면 text의 값이 바뀌게 하려면 value={text}을 입력해야한다.*/}
      <input
       name="nickname"
        placeholder="닉네임"
         onChange={onChange}
          value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {/* 이름 (닉네임) */}
        {name} ({nickname})
    </div>
    </div>
  )
}
export default InputSample;
