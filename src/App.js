import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FicheCard from './components/FicheCard';
import { Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Public from './pages/Public';
import MemoPage from './pages/MemoPage';
import DemoPage from './pages/DemoPage';
import DemoSuccessModal from './components/DemoSuccessModal';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/fiches' element={<Home />} />
        <Route path='/fiches/:id' element={<Navigate to='/fiches/:id/1' />} />
        <Route path='/fiches/:id/:number' element={<MemoPage />} />
        <Route path='/demo/:number' element={<DemoPage />} />
        <Route path='/demo/succes' element={<DemoSuccessModal />} />

      </Routes>
    </>
  );
}

export default App;
