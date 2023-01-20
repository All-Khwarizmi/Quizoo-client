import React, { useContext } from 'react';
import Spinner from '../components/Spinner';
import { UserContext } from '../libs/studentContext';
const PublicComponent = () => {
   const {user, getStudent }= React.useContext(UserContext)
   console.log(user, getStudent)
/*    */ 
if (user ) {
    return <h1> Welcome {user.nickname}</h1>
} else  {
return <h1> Welcome 
    </h1>
}
  
};

export default PublicComponent;
