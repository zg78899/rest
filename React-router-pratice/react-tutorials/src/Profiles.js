import React from 'react';
import Profile from '.Profile';
import { NavLink, Route } from 'react-router-dom';
// import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        {/* <li>
          <NavLink to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
            isActive={(match, location) => {
              return match.params.어쩌구 = 저쩌구//true이면 return false이면 반환 안함.
            }}
          >velopert</NavLink>
        </li> */}
        {/* <li>
          <NavLink
            to="/"
            exact//사용해야한다.
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
            isActive={(match, location) => {
              return match.params.어쩌구 = 저쩌구//true이면 return false이면 반환 안함.
            }}
          >velopert</NavLink>
        </li> */}
        <li>
          <NavLink to="/profiles/hommer"
            activeStyle={{ background: 'black', color: 'white' }}
          >hommer</NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 입력해주세요</div>} />{/** render 사용하면 컴포넌트를 넣어주는 것이아니라 바로 함수형 컴포넌트를 넣어줄수있다. */}
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample/> */}
      <RouterHookSample/>
    </div>
  )

}
export default Profiles;

