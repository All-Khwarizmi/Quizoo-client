import React from 'react';
import Memos from '../components/Memos';
import AddMemoModal from '../components/AddMemoModal';
import { useQuery } from '@apollo/client';
import {
  
  GET_STUDENT,
} from '../queries/memoQueries';
import Spinner from '../components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  // TODO add useQuery(GET_STUDENT) so that we can provide the component tree
  // Maybe with useContext or just passing props
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { id: '63c2de4c639da3634af19395' },
  });
if (isLoading) {
  return <Spinner />;
}
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  const {getStudent} = data
   
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h3 className='col'>Welcome {user.nickname}</h3>
          <h3 className='col'>
            MemoScore: <strong>{getStudent.score}</strong>{' '}
          </h3>
        </div>
        <AddMemoModal />
        <Memos student={getStudent} />
      </div>
    </>
  );
};

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Spinner />,
});
