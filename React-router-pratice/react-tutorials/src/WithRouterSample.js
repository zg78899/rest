import React from 'react';
import {withRouter} from 'react-router-dom';

function WithRouterSample({location,match,history}){// 사용하는 경우는 route 컴포넌트를 사용하지않은 곳에서 조건부로 이동해야할때 자주 사용한다.
  return(
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location,null,2)} redayOnly/>{/** location null 2를 하면 문자열화 하면서 알아서 들여쓰기가 된다. */}
      <h4>match</h4>
      <textarea value={JSON.stringify(match,null,2)} redayOnly/>
      <button onClick={()=>history.push('/')}>홈으로</button>

    </div>
  )

}
export default withRouter(WithRouterSample);
