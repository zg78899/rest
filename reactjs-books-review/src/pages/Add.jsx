import React from 'react';
// import Navs from '../components/Navs';
import BookAddForm from '../components/BookAddForm';
import withAuth from '../hocs/withAuth';

function Add({ token, addVisible, setAddVisible, getBooks }) {
  console.log(addVisible);
  return (
    <div>
      {/* <Navs token={token} /> */}
      <BookAddForm
        getBooks={getBooks}
        token={token}
        addVisible={addVisible}
        setAddVisible={setAddVisible}
      />
    </div>
  );
}

export default withAuth(Add);
