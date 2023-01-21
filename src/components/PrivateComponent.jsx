import React, { useContext } from 'react';
import Spinner from '../components/Spinner';
import { UserContext } from '../libs/studentContext';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../queries/memoQueries';
import CreateStudentModal from './CreateStudentModal';
import PublicComponent from './PublicComponent';

const PrivateComponent = () => {
  const { user } = React.useContext(UserContext);
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { email: user.email },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  //  const {getStudent} = data
  if (!data.getStudent.length) {
    if (user.nickname) {
        console.log(user.nickname);
      return   <CreateStudentModal user={user} />
    } else {
        console.log("No nickname");
    }
  } else  {
    // TODO
    console.log(data);
    
     return (
       <div className='container'>
        
    <PublicComponent />        
       </div>
     );;
    
  }
 
};

export default PrivateComponent;
