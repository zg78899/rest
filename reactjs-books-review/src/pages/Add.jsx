import React from 'react';
import Navs from '../components/Navs';
import BookAddForm from '../components/BookAddForm';
import withAuth from '../hocs/withAuth';

function Add({ token }) {
  return (
    <div>
      <Navs token={token} />
      <BookAddForm token={token} />
    </div>
  );
}
export default withAuth(Add);
