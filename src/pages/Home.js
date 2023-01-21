import React from 'react';
import Memos from '../components/Memos';
import AddMemoModal from '../components/AddMemoModal';
import { useQuery } from '@apollo/client';
import {
  
  GET_STUDENT,
} from '../queries/memoQueries';
import Spinner from '../components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { UserContext } from '../libs/studentContext';
const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { email: user.email },
  });
if (isLoading) {
  return <Spinner />;
}
  if (loading) return <Spinner />;
  if (error){
    console.log(JSON.stringify(error));
    return <p>Something Went Wrong</p>;
  }
  const {getStudent} = data
   //console.log( getStudent[0].class)
   
  return (
    <>
      <Container className='container-memo'>
        <Row>
          <Col className='p-2 color-secondary'>
            {' '}
            <h4>
              
                Welcome {getStudent[0].userName || getStudent[0].name}
             
            </h4>
          </Col>
          <Col className='p-2 color-secondary'>
            <h3>
              {' '}
             {getStudent[0].score} Puntos {' '}
            </h3>
          </Col>
        </Row>
      </Container>
      <Container className='container-memo'>
        {getStudent[0].class == 'admin' ? <AddMemoModal /> : null}
        <UserContext.Provider value={{ user, getStudent }}>
          <Memos student={getStudent} />
        </UserContext.Provider>
      </Container>
    </>
  );
};

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Spinner />,
});
