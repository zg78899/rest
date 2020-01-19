import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      홈페이지입니다.
      <>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="signin">로그인</Link>
          </li>
        </ul>
      </>
    </div>
  );
}
export default Home;
