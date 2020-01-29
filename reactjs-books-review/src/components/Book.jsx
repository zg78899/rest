import React from 'react';
import * as axios from 'axios';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: #99ccff;
  text-align: center;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: block;
`;

const StyledSpan = styled.span.attrs(() => ({
  children: '*'
}))`
  color: #971931;
`;

function Book(props) {
  const click = async () => {
    // console.log(props);
    // console.log('삭제', props.bookId);
    try {
      await axios.delete(`https://api.marktube.tv/v1/book/${props.bookId}`, {
        headers: {
          Authorization: `Bearer ${props.token}`
        }
      });
      // console.log(res);
      // console.log(props.RemoveBook)
      props.RemoveBook(props.bookId);
      // console.log(props.RemoeBook);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        border: '1px solid #28546a',
        borderRadius: 10,
        padding: 10,
        margin: 10
      }}
    >
      <h2>
        Title
        <StyledSpan /> :{props.title}
      </h2>
      <p>
        Comment
        <StyledSpan />: {props.message}
      </p>
      <p>
        Author
        <StyledSpan />: {props.author}
      </p>
      <p>
        <a href={props.url}>
          Link URL
          <StyledSpan />: {props.url}
        </a>
      </p>
      <StyledButton onClick={click}>delete</StyledButton>
    </div>
  );
}
export default Book;
