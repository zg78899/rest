import React from 'react';
import styled from 'styled-components';
// TodoTemplete 물러오기 컴포넌트
const TodoTemplateBlock=styled.div`
width: 512px;
height:760px;

position:relative;
background:white;
border-radius:16px;
box-shadow: 0 0 8px rgba(0,0,0, 0.04);

margin:0 auto;
margin-top:96px;
margin-bottom:32px;

display:flex;
flex-direction:column;
`;

function TodoTemplate({children}) {
  return (
  <TodoTemplateBlock>{children}</TodoTemplateBlock>
  )

}
export default TodoTemplate;