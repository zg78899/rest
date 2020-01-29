import React,{useState,useMemo,useCallbak} from 'react';
const Person=React.Memo(({index,click,name,age})=>{
  console.log(name,age);
function onClick() {
  click(index)
}

  return(
    <li>
    {name},{age},<button onClick={onClick}>한해가 갔다.</button>
    </li>
  )
});

const Example10=()=>{
  const [val,setVal]=useState('');
  const [persons,setPersons]=useState([
    {name:'kim', age:27},
    {name:'park' ,age:28}
  ]);

  function  change(e) {
    setVal(e.target.value);
  }

  const click= useCallbak((index)=>{
    const newPersons=[
        ...persons
    ];
    newPersons[index].age=newPersons[index].age+1;
      setPersons(newPersons);

      setPersons(persons=>{
        const newPersons=[
          ...persons
      ];
      newPersons[index].age=newPersons[index].age+1;
      return newPersons;
      })
  },[]);
  
  return (
    <div>
      <input vall={val} onChange={change}/>
      <ul>
        {persons.map((person,index)=>
        <Person index={index} key={index}  name={person.name} age={person.age} click={click}/>)}
      </ul>
    </div>
  )
}

export default Example10;