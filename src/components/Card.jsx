import React, { useState } from 'react';
import CardModal from './CardModal';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../queries/memoQueries';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Spinner from './Spinner';
import { UserContext } from '../libs/studentContext';

// Can delete this component
const Card = ({ numberOfQuestions, newQuestion, id, number }) => {
    const { loading, error, data } = useQuery(GET_STUDENT, {
      variables: { id: '63c2de4c639da3634af19395' },
    });
   
    if (loading) return <Spinner />;
    if (error) return console.log(JSON.stringify(error));
    {
      /* <p>Something Went Wrong</p>; */
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
