import React, { useState, useEffect } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import Navs from '../components/Navs';
import Book from '../components/Book';

const Home = ({ token }) => {
  const [books, setBooks] = useState([
    {
      bookId: 1,
      title: '모던 자바스크립트 입문',
      message: '모던하군요',
      author: '서재원',
      url:
        'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc='
    }
  ]);
  useEffect(() => {
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
  }, [token]);

  const RemoveBook = bookId => {
    // console.log(bookId);
    setBooks(books.filter(book => book.bookId !== bookId));
  };
  return (
    <div>
      <Navs token={token} />
      <h1>Home</h1>
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
  );
};
export default withAuth(Home);
