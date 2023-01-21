import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import FicheCard from '../components/FicheCard'
import Spinner from '../components/Spinner';

const MemoPage = () => {
 const { user, isAuthenticated, isLoading } = useAuth0();
 if (isLoading) {
   return <Spinner />;
 }

  return (
    <FicheCard user={user} />
  )
}

export default withAuthenticationRequired(MemoPage, {
  onRedirecting: () => <Spinner />,
});