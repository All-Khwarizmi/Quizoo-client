import { useQuery } from '@apollo/client';
import React from 'react';
import {  useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import {
  
  GET_FICHE,
} from '../queries/memoQueries';


const Fiche = () => {
  let { id } = useParams();
  id = id.split('').splice(1).join('');
 
  const { loading, error, data } = useQuery(GET_FICHE, {
    variables: { id },
  });

  if (loading)  {
    return (<div className='container'>
        <Spinner />
    </div>)
  } else if (error) {

     return (<div className='container'>
       <h1>Something Went Wrong</h1>
    </div>)
  }
  const {getFiche: {question} }= data 
 

  /* return question.map(question => <FicheCard  key={question.id} question={question} />) */
  
};

export default Fiche;
