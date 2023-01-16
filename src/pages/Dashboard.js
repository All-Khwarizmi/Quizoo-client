import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Spinner from '../components/Spinner';

const Dashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
     if (isLoading) {
    return <Spinner />;
     }
  return (
    <div className='container'>
      <h2> Welcome{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Spinner />,
});
