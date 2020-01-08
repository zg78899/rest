import React from 'react';
import {
  Route,
  Link,
  Switch
}
  from 'react-router-dom';
import Home from './Home';
import About from './About'
import Profiles from './Profiles';
import HistorySample from './HistorySample';
// 경로 이동에서 <a></a>태그 를 사용하면 페이지가 완정히 다시 로드되기 때문에 사용해서는 안된다.

//index.js에서 BrowserRouter로 <App/>을 묶어주었다. 
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route exact path="/" component={Home} />{/**  "/"경로 가 지정되어있지 않은 페이지에서는 {Home}페이지로 이동하겠다. exact을 사용하지않으면 path="/"을 맨밑에 두면 잘 작동한다. Switch는 조건에 부합하는 routeㅇ르 실행하기 때문에 순서가 중요하다. */}
        <Route path="/about" component={About} />
        <Route path="/profiles/:username" component={Profiles} /> {/** :username이 match.params의 username 이된다. */}
        <Route pst="/history" component={HistorySample}/>
        <Route render={({ location})=>(
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )}/>{/**path가 없기 때문에 모든 상황에서 렌더링되는 컴포넌트가 됨 /404 에러 페이지를 만들때 switch와 route를 사용하여 만든다.*/}
      </Switch>

    </div>
  );
}
export default App;
