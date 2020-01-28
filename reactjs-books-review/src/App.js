import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from 'react-error-boundary';
import Add from './pages/Add';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
