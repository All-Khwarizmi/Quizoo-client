import React from 'react';
import MemoRow from './MemoRow';
import { useQuery } from '@apollo/client';
import {
  GET_FICHES_CLASS,
} from '../queries/memoQueries';
import Spinner from './Spinner';
import { UserContext } from '../libs/studentContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Memos = (/* {student} */) => {
   const { user, getStudent } = React.useContext(UserContext);
 console.log(getStudent[0].class)
  const { loading, error, data } = useQuery(GET_FICHES_CLASS, {
    variables: { class: getStudent[0].class },
  });
 
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

 const { getFichesClass } = data;
 if (!getFichesClass.length){
   console.log(getStudent);
   return <h1>No QuizoO available for now</h1>;

  }
  
  return (
    <>
    
      {!loading && !error && (
        <Container fluid>
          <Row className='row gm-1'>
            {getFichesClass.map((fiche) => (
              <MemoRow key={fiche.id} student={getStudent} fiche={fiche} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Memos;
