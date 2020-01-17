import React from 'react';
import qs from 'query-string';
import {useLocation} from 'react-router-dom';

function About(props) {
  const location=useLocation();
  const {name} = qs.parse(location.search);
  // const name = searchParams.get("name")
  console.log(name);
  
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>name 는 {name} 입니다,{typeof name}</p>}
    </div>
  )

}
export default About;