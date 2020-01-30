import React, { useState } from 'react';
import { Input, Button, Col, message } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

const InputTitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: ${props => props.top || '40'}px;
  text-align: left;
  padding-left: 40px;
`;

const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledInput = styled(Input)`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
`;

const ButtonArea = styled.div`
  text-align: left;
  padding-left: 40px;
  margin-top: 20px;
`;
const StyledButton = styled(Button)`
  border-color: blue;
  background-color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 120px;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

const StyledSpan = styled.span.attrs(() => ({
  children: '*'
}))`
  color: #971931;
`;

const StyledWrapped = styled.div`
  position: fixed;
  width: 400px;
  height: 430px;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0.5);
  background: #99ccff;
  border-radius: 0 10px 10px 10px;
  text-align: right;
  padding-right: 10px;
  padding-top: 10px;
`;

const CloseButton = styled.button`
  border-radius: 50%;
  text-align: right;
  align-items: middle;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

function SigninForm({
  token,
  handleCancel,
  getBooks,
  setAddVisible,
  addVisible
}) {
  // const history =useHistory();
  const titleInput = React.createRef();
  const messageInput = React.createRef();
  const authorInput = React.createRef();
  const urlInput = React.createRef();

  // const [loading, setLoading] = useState(false);

  const click = async () => {
    // const { history, token } = props;
    console.log(token);

    const title = titleInput.current.state.value;
    const messageValue = messageInput.current.state.value;
    const author = authorInput.current.state.value;
    const url = urlInput.current.state.value;

    try {
      // setLoading(true);
      const response = await axios.post(
        'https://api.marktube.tv/v1/book',
        {
          title,
          message: messageValue,
          author,
          url
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response);
      console.log(getBooks);
      getBooks();
      console.log(setAddVisible);
      setAddVisible(!addVisible);
      console.log(handleCancel);
      // handleCancel();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(setAddVisible);
  return (
    <StyledWrapped>
      <CloseButton onClick={() => setAddVisible(!addVisible)}>X</CloseButton>
      <Col
        span={12}
        style={{
          verticalAlign: 'top'
        }}
      >
        <InputTitle>
          Title
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Title" ref={titleInput} />
        </InputArea>
        <InputTitle top={10}>
          Comment
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Comment" ref={messageInput} />
        </InputArea>
        <InputTitle top={10}>
          Author
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Author" ref={authorInput} />
        </InputArea>
        <InputTitle top={10}>
          URL
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="URL" ref={urlInput} />
        </InputArea>
        <ButtonArea>
          <StyledButton size="large" onClick={click}>
            추가하기
          </StyledButton>
        </ButtonArea>
      </Col>
    </StyledWrapped>
  );
}
export default withAuth(SigninForm);
