import React from 'react';
import { BrowserRouter, Route,Switch,Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Profile from './pages/profile'
import NotFound from './pages/NotFound';
import Links from './components/Links';
import Login from './pages/Login';


const App = () => {
  return (
    <BrowserRouter>
    
    <Links />
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound}/>
      </Switch>

    </BrowserRouter>

  )
}

export default App;
