import React from 'react';
import MemoRow from './MemoRow';
import { useQuery } from '@apollo/client';
import {
  GET_FICHES_CLASS,
} from '../queries/memoQueries';
import Spinner from './Spinner';

const Memos = ({student}) => {
  
  const { loading, error, data } = useQuery(GET_FICHES_CLASS, {
    variables: {class: student.class}
  });
 
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

 const { getFichesClass } = data;

  
  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Fiche</th>
              <th>Classe</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getFichesClass.map((fiche) => (
              <MemoRow key={fiche.id} student={student} fiche={fiche} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Memos;
