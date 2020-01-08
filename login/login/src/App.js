import React from 'react';
import {BrowserRouter as Router,
Route,
Switch,
Redirect
} from 'react-router-dom';

import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import SignOut from './component/SignOut';
import User from './component/User';
import Main from './Main';
import {useAuthed} from './lib/hooks';

function AuthedRoute({component:Component,authed,...rest}){
  const isAuthed=useAuthed();
  return (
    <Route
    {...rest}
    render={props=>isAuthed !== false
    ?
  <Component {...props}/>
:<Redirect to={{pathname:'signin',state:{from:props.location}}}/>}/>
  )

}


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn}/>
        <Route path="/signout" component={SignOut}/>
        <AuthedRoute path="/user" component={User}/>
        <Route path="/" component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
