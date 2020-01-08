import React from 'react';


const profileData = {
  velopert: {
    name: 'rlawogjs',
    description: 'roWjsek'
  },
  hommer: {
    name: 'kim',
    description: 'roWjsek'
  }
}


function Profile({ match }) {// 해당 값을 조회 할때는 match props를 받아 온다.
  //match라는 값은 Route컴포넌트에서 넣어주는 값으로 우리가 따로 지정해주지않아도 된다.
  const { username }=match.params;//username의 값을 추출한다. Route 컴포넌트의 match에 params라는 값이 있다.그안에 우리가 넣어주고 싶은 url파라미터가 있다.
  const profile = profileData[username];
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>

    </div>
  )

}
export default Profile;
