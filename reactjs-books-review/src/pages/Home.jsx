import React, { useState, useEffect, useCallback } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import Navs from '../components/Navs';
import Book from '../components/Book';
import Add from './Add';

const Home = ({ token }) => {
  const [addVisible, setAddVisible] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = useCallback(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res.data);
        setBooks(res.data);
      });
  });

  useEffect(() => {
    getBooks();
  }, [getBooks, token]);
  const RemoveBook = bookId => {
    // console.log(bookId);
    setBooks(books.filter(book => book.bookId !== bookId));
  };
  return (
    <>
      {addVisible && (
        <Add
          getBooks={getBooks}
          addVisible={addVisible}
          setAddVisible={setAddVisible}
        />
      )}
      <div>
        <Navs
          token={token}
          addVisible={addVisible}
          setAddVisible={setAddVisible}
        />
        <h1 style={{ paddingLeft: 40, textAlign: 'center' }}>Home</h1>
        <ul>
          {books.map(book => (
            <Book
              {...book}
              token={token}
              key={book.bookId}
              RemoveBook={RemoveBook}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
export default withAuth(Home);
