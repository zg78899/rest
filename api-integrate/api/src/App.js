import React from 'react';
import Users1 from './Users1'
import {UsersProvider} from './UsrsContext';


// UsersProvider로 Users을 감싸 주어야만 UsersStateContext와 UsersDispatchContext을 사영할수있따.

function App() {
  return (
    <UsersProvider>
      <Users1/>
    </UsersProvider>
    
  )
}

export default App;
