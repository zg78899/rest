import React from 'react';
import * as axios from 'axios';

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
        border: '1px solid black',
        passing: 10,
        margin: 10
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <p>{props.author}</p>
      <p>
        <a href={props.url}>{props.url}</a>
      </p>
      <button onClick={click}>delete</button>
    </div>
  );
}
export default Book;
