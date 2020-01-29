import React, { useState } from 'react';
import { Col, Button, message } from 'antd';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))`
  vertical-align: top;
  background: #eee;
  padding-left: 30px;
  padding-right: 30px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LogInForm = styled.fieldset`
  border-bottom: 1px solid #ccc;
`;
const InputTitle = styled.label`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  padding-left: 40px;
  padding: 0;
`;
const Input = styled.input`
  text-align: left;
  width: 320px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 2px;
  border: 0.5px solid #ccc;
  background-color: #dae3f5;
`;
const ButtonArea = styled.div`
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
  border-color: #28546a;
  background-color: #28546a;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 100px;
  padding: 0;

  &:hover {
    background: white;
    color: #28546a;
  }
`;
const LinkForm = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const LinkTitle = styled.div`
  align-items: center;
`;
const LinkButton = styled(Button)`
  border-color: #28546a;
  background-color: transparent;
  border-radius: 1px;
  border-width: 1px;
  color: #28546a;
  width: auto;
  font-size: 10px;
  font-weight: bold;
  height: auto;

  &:hover {
    background: white;
    color: #28546a;
  }
`;
const StyledSpan = styled.span.attrs(() => ({
  children: '*'
}))`
  color: red;
`;

function SigninForm() {
  const history = useHistory();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const [loading, setLoading] = useState(false);

  async function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    try {
      setLoading(true);
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password
      });
      const { token } = response.data;
      setLoading(false);
      localStorage.setItem('token', token);
      history.push('/');
    } catch (error) {
      setLoading(false);
      if (error.response.data.error === 'USER_NOT_EXIST') {
        message.error('일치하는 유저가 없습니다.');
      }
      if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
        message.error('비밀번호가 일치하지않습니다.');
      } else {
        message.error('로그인에 문제가 있습니다.');
      }
    }
  }
  return (
    <StyledCol>
      <Title>Log in. Start Searching</Title>
      <LogInForm>
        <div>
          <InputTitle>
            Email
            <StyledSpan />
          </InputTitle>
          <Input
            autoFocus
            name="email"
            type="email"
            placeholder="Enter your Email adress"
            ref={emailRef}
          />
        </div>
        <div>
          <InputTitle>
            Passsword
            <StyledSpan />
          </InputTitle>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
        </div>
        <ButtonArea>
          <StyledButton onClick={click} size="large" loading={loading}>
            Sign In
          </StyledButton>
        </ButtonArea>
      </LogInForm>
      <LinkForm>
        <LinkArea>
          <LinkTitle>Need to cretae an account?</LinkTitle>
          <Link to="/signup">
            <LinkButton>Sign Up</LinkButton>
          </Link>
        </LinkArea>
        <LinkArea>
          <LinkTitle>Forgot your pssword?</LinkTitle>
          <Link to="/forgot">
            <LinkButton>RECOVERY</LinkButton>
          </Link>
        </LinkArea>
      </LinkForm>
    </StyledCol>
  );
}
export default SigninForm;
