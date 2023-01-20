import PublicComponent from "../components/PublicComponent"
import Spinner from "../components/Spinner";
import { useQuery } from '@apollo/client';
import { GET_STUDENT, GET_FICHES_CLASS } from '../queries/memoQueries';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { UserContext } from '../libs/studentContext';
import React from 'react';
const Public = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loading, error, data } = useQuery(GET_FICHES_CLASS, {
    variables: { class: '404' },
  });
  if (isLoading) return <Spinner />;
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
  const {getStudent} = data
   console.log(getStudent);

  
  return (
    <UserContext.Provider value={{getStudent, user}}>
       <PublicComponent />
    </UserContext.Provider>
   
  )
}

export default Public