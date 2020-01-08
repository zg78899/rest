import React, { useState, useEffect } from 'react';
import axios from 'axios';

//useState를 사용하여 요청에 대한 상태를 관리하였다.
function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {//useEffect을 사용하여 컴포넌트가 가장 처음에 렌더링이 될때 fetchUsers라는 함수를 호출한다.
    try {
      setUsers(null);
      setError(null);//두가지 값을 초기화
      setLoading(true);//로딩이 시작되었다는 것을 의미한다.

      const response = await axios.get('http://jsonplaceholder.typicode.com/users/');
      setUsers(response.data)//응답의 결과값을 보기위해,요청이 성공하면 setUsers의 값으로 설정을 해준다.setUsers 값을 바꾼다.

    } catch (e) {
      // console.log(e.response.status);
      
      setError(e);//error가 발생하면 에러의 값을 바꾼다.
    }
    setLoading(false)//제일 마지막으로 로딩이 끝났다는 것을 알려야 한다.
  }

  useEffect(() => {// 
   
    fetchUsers();
  }, []);

  //그다음에는 세가지 상태에 따라 다른 값을 렌더링 할 것이다.
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생했습니다.</div>
  if (!users) return null;//users에 제대로된 값이 들어가지않았을때

  //users에 제대로된값이 들어갔을 경우에
  return (
    <>
    <ul>
    {users.map(user => <li key={user.id}>
      {user.username}({user.name})
  </li>)}
  </ul>
  <button onClick={fetchUsers}>다시불러오기</button>{/**버튼을 눌렀을때 특정 api를 다시 불러오는 방법*/}

    </>
      )
}
export default Users;