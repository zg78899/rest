import React, { useState } from 'react';
import { Input, Button, Col, message } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';

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
  width: 3201px;
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

function SigninForm(props) {
  // const history =useHistory();
  const titleInput = React.createRef();
  const messageInput = React.createRef();
  const authorInput = React.createRef();
  const urlInput = React.createRef();

  const [loading, setLoading] = useState(false);

  const click = async () => {
    const { history, token } = props;
    console.log(props);

    const title = titleInput.current.state.value;
    const messageValue = messageInput.current.state.value;
    const author = authorInput.current.state.value;
    const url = urlInput.current.state.value;

    try {
      setLoading(true);
      await axios.post(
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
      history.push('/');
    } catch (error) {
      message.error(error.response.data.error);
      setLoading(false);
    }
  };
  return (
    <Col span={12} style={{ verticalAlign: 'top' }}>
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
        <StyledButton size="large" loading={loading} onClick={click}>
          추가하기
        </StyledButton>
      </ButtonArea>
    </Col>
  );
}
export default withRouter(SigninForm);
