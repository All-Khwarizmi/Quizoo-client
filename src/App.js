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

const client = new ApolloClient({
  uri: 'https://express-graphql-quiz-api-production.up.railway.app/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path='/' element={<Public />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/fiches' element={<Home />} />
          <Route path='/fiches/:id' element={<Navigate to='/fiches/:id/1' />} />
          <Route path='/fiches/:id/:number' element={<FicheCard />} />
        </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
