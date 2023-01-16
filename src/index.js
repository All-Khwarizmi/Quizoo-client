import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { UserContext } from './libs/studentContext';
import { GET_STUDENT } from './queries/memoQueries';
import Spinner from './components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

// Move userContext, Provider to App.js
/* const GetUserData = () => {
  const { loading, error, data } = useQuery(GET_STUDENT, {
  variables: { id: '63c2de4c639da3634af19395' },
  });
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner />;
  }
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  const { getStudent } = data;
  return {getStudent, user}
}
const {getStudent, user} = GetUserData() */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-uv0vhada41ld6scj.eu.auth0.com'
        clientId='1iDQh1RNowlEt3wMmHvZfKkzSdiXrtU8'
        redirectUri={window.location.origin}
      >
        <UserContext.Provider value={{user: {}, getStudent: {}}}>
          <App />
        </UserContext.Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
