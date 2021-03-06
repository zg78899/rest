import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import SigninBg from '../components/SigninBg';
import SigninForm from '../components/SigninForm';

const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle'
}))`
  height: 100vh;
`;
const StyledCol = styled(Col).attrs(() => ({
  span: 24
}))``;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: upppercase;
`;

const StyledSubTitle = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledUnderline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const StyledContents = styled(Row).attrs(() => ({
  type: 'flex'
}))`
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

const Signin = () => {
  return (
    <StyledRow>
      <StyledCol>
        <StyledTitle>Review Service For Book</StyledTitle>
        <StyledSubTitle>
          Please Share Your Opinion On Web Development Books.
        </StyledSubTitle>
        <StyledUnderline />
        <StyledContents>
          <SigninBg />
          <SigninForm />
        </StyledContents>
      </StyledCol>
    </StyledRow>
  );
};
export default Signin;
