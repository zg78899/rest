import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';


//왼쪽에 있는 체크 써클을 보여주는 컴포넌트
const CheckCricled = styled.div`
width:32px;
height:32px;
border-radius:16px;
border:1px solid #ced4da;
font-size:24px;
display:flex;
justify-content:center;
margin-right:20px;
cursor:pointer;

${props => props.done &&
    css`
  border:1px solid #38d9a9;
  color:#38d9a9;
`}
`;

//Text는 text을 보여주는 컴포넌트
const Text = styled.div`
flex:1;
font-size:20px;
color:#495057;
 ${props => props.done && css`
 color:#ced4da;
 `}
`;

//우측에 나타나는 스레티통을 나타내는 컴포넌트
const Remove = styled.div`
opacity:0;
display:flex;
align-items:center;
justify-content:center;
color:#dee2e6;
font-size:24px;
cursor:pointer;
&:hover{
  color:#ff6b6b;
}
`;

//TodoItemBlock에는 위의 3개의 컴포넌트가 들어가는 컴포넌트이다.
const TodoItemBlock = styled.div`
display:flex;
align-items:center;
padding-top:12px;
padding-bottom:12px;

&:hover{
  ${Remove}{
    opacity:1;
  }
}
`;
// &:hover는 특정한 상황 Remove컴포넌트의 마우스가 hover되었을때의 opercity1을 설정해주었다.
function TodoItem({ id, done, text }) {
  const dispatch=useTodoDispatch();
  const onToggle=()=>dispatch({
    type:'TOGGLE',
    id
  });
  const onRemove=()=>dispatch({
    type:'REMOVE',
    id
  })
  return (
    <TodoItemBlock>
      <CheckCricled onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCricled>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}
export default React.memo(TodoItem);