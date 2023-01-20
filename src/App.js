import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fiche from './pages/Fiche';
import FicheCard from './components/FicheCard';
import { Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Public from './pages/Public';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { UserContext } from './libs/studentContext';
import { GET_STUDENT } from './queries/memoQueries';
import Spinner from './components/Spinner';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';



function App() {
/*   // Move userContext, Provider to App.js
  const GetUserData = () => {
  const { loading, error, data } = useQuery(GET_STUDENT, {
  variables: { id: '63c2de4c639da3634af19395' },
  });
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner />;
  }
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  const { getStudent } = data;
  return {getStudent, user}
}
const {getStudent, user} = GetUserData()
console.log(getStudent, user) */
  return (
    <>
     
   {/*    <UserContext.Provider value={{user, getStudent}}>  */}
      
        <Header />
        <Routes>
        
          <Route path='/' element={<Public />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/fiches' element={<Home />} />
          <Route path='/fiches/:id' element={<Navigate to='/fiches/:id/1' />} />
          <Route path='/fiches/:id/:number' element={<FicheCard />} />
          
        </Routes>
     
       {/*  </UserContext.Provider> */}
     
    </>
  );
}

export default App;
