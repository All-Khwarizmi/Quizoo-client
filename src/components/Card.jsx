import React, { useState } from 'react';
import CardModal from './CardModal';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../queries/memoQueries';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Spinner from './Spinner';
import { UserContext } from '../libs/studentContext';

// Can delete this component
const Card = ({ numberOfQuestions, newQuestion, id, number, user }) => {
   console.log(user.user.email)
    const { loading, error, data } = useQuery(GET_STUDENT, {
      variables: { email: user.user.email },
    });
   
    if (loading) return <Spinner />;
    if (error) {
      console.log(JSON.stringify(error));
      return (
        <div className='container'>
          {' '}
          <p>Something Went Wrong</p>
        </div>
      );
    }
    const { getStudent } = data;
  return (
    <>
      <UserContext.Provider value={{ getStudent }}>
        <CardModal
          numberOfQuestions={numberOfQuestions}
          newQuestion={newQuestion}
          id={id}
          number={number}
        />
      </UserContext.Provider>
    </>
  );
};

export default Card;
