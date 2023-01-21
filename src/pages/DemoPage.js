import React from 'react'
import { useQuery } from '@apollo/client';
import {
  GET_FICHE,
} from '../queries/memoQueries';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import DemoQuestionModal from '../components/DemoQuestionModal';

const DemoPage = () => {
  let { number } = useParams();
 const id = '63cbb13e16613d49145f9491';
      const { loading, error, data } = useQuery(GET_FICHE, {
        variables: { id},
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

      let newQuestion = question.filter(
        (question) => question.number == number
      );
      newQuestion = newQuestion[0];
  return (
    <>
        <DemoQuestionModal 
        newQuestion={newQuestion}
        id={id}
        number={number}
        numberOfQuestions={numberOfQuestions}
         />
    </>
  )
}

export default DemoPage

// fiche id = 63cbb13e16613d49145f9491