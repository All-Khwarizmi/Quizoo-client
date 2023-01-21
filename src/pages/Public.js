import PublicComponent from "../components/PublicComponent"
import Spinner from "../components/Spinner";
import { useQuery } from '@apollo/client';
import { GET_STUDENT, GET_FICHES_CLASS } from '../queries/memoQueries';
import PrivateComponent from "../components/PrivateComponent";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { UserContext } from '../libs/studentContext';
import React from 'react';
const Public = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner />;
     console.log('User?', isAuthenticated, user);

if (isAuthenticated) {
   return (
    <UserContext.Provider value={{ user}}>
       <PrivateComponent />
    </UserContext.Provider>
   
  )
}
 else {
 return <PublicComponent />
 }
  
 
}

export default Public