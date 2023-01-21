import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://express-graphql-quiz-api-production.up.railway.app/graphql',
  cache: new InMemoryCache(),
});
// "https://express-graphql-quiz-api-production.up.railway.app/graphql"
// "https://graphsqlapi.onrender.com/graphql"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 /*  <React.StrictMode> */
  
    <BrowserRouter>
      <Auth0Provider
        domain='dev-uv0vhada41ld6scj.eu.auth0.com'
        clientId='1iDQh1RNowlEt3wMmHvZfKkzSdiXrtU8'
        redirectUri={window.location.origin}
      >
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0Provider>
    </BrowserRouter>
  /* </React.StrictMode> */
);
