import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App1 from './App1';

const cache = new InMemoryCache();
const GITHUB_BASE_URL=`https://api.github.com/graphql`;
const httpLink = new HttpLink({
  uri:  GITHUB_BASE_URL,
  headers: {
    authorization:` Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
  }
});
const client=new ApolloClient({
  link:httpLink,
  cache
});//초기화

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <App1/>
    </div>
    </ApolloProvider>
  );
}

export default App;
