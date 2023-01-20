import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  GET_FICHES_CLASS,
  GET_FICHES_WQ,
  GET_STUDENT,
  GET_FICHE,
} from '../queries/memoQueries';
import Spinner from './Spinner';

import Card from './Card';

const FicheCard = () => {
  let { id, number } = useParams();
  id = id.split('').splice(1).join('');
  const { loading, error, data } = useQuery(GET_FICHE, {
    variables: { id },
  });
  // console.log(JSON.stringify(error))
  if (loading) {
    return (
      <div className='container'>
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className='container'>
        <h1>Something Went Wrong</h1>
      </div>
    );
  }
  const {
    getFiche: { question },
  } = data;

  console.log(question.length);

  const numberOfQuestions = question.length;

  let newQuestion = question.filter((question) => question.number == number);
  newQuestion = newQuestion[0];
  return (
    <Card
      number={number}
      numberOfQuestions={numberOfQuestions}
      id={id}
      newQuestion={newQuestion}
    />
  );
};
export default withAuthenticationRequired(FicheCard, {
  onRedirecting: () => <Spinner />,
});

/*  */
