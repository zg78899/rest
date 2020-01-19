import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))`
  vertical-align: top;
  background: aqua;
`;
const Title = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const EmailInput = styled.input``;
function SigninForm() {
  return (
    <StyledCol>
      <Title>Log in. Start Searching</Title>
    </StyledCol>
  );
}
export default SigninForm;
