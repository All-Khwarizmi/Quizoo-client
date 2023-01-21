import React from 'react';
import Memos from '../components/Memos';
import AddMemoModal from '../components/AddMemoModal';
import { useQuery } from '@apollo/client';
import {
  
  GET_STUDENT,
} from '../queries/memoQueries';
import Spinner from '../components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
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
  console.log( getStudent[0].class)
   
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h3 className='col'>Welcome {getStudent[0].userName}</h3>
          <h3 className='col'>
            MemoScore: <strong>{getStudent[0].score}</strong>{' '}
          </h3>
        </div>
        {getStudent[0].class == 'admin' ? <AddMemoModal /> : null}
        <UserContext.Provider value={{ user, getStudent }}>
          <Memos student={getStudent} />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Spinner />,
});
