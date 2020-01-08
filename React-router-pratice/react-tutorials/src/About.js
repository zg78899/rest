import React from 'react';
import qs from 'qs';// query-string

function About({ location }){// query-string을 사용하는 경우에는 loaction을 받아와서 사용한다.
  console.log(location);//http://localhost:3000/about?a=1 이라고 쿼리를 사용하면 search의 값에 a=1이라는 값이 들어가겍된다.
  // {pathname: "/about", search: "?a=1", hash: "", state: undefined} location 내부에 search에 들어가는 값은 qs(라이브러리)를 사용하여 추출한다.
  const query=qs.parse(location.search,{//location.search는 물음표가 포함된 문자열이기땜누에 parse을 해 주어야한다.
      ignoreQueryPrefix:true,//ignoreQueryPrefix을 사용하면  ?표를 생략할수있다.
  });
  const detail = query.detail === 'true';//query는 문자열이기때문에 문자열로 비교해 주어야한다.
  return(
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 리우터를 실습하는 예제 프로젝트 입니다.
      </p>
      {detail && <p>디테일 값이 true 입니다.</p> }{/** query가 deatl=true이면 다음을 추가하겠다. */}
    </div>
  )

}
export default About;