import React, { useContext } from 'react'
import Spinner from '../components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { GET_STUDENT, GET_FICHES_CLASS } from '../queries/memoQueries';
import { useQuery } from '@apollo/client';
import { UserContext } from '../libs/studentContext';

const Public = () => {
 /* const {user, student }= useContext(UserContext)
  const { loading, error, data } = useQuery(GET_FICHES_CLASS, {
    variables: {class: student.class}
  }); */

  
  return (
    <div>Public</div>
  )
}

export default Public