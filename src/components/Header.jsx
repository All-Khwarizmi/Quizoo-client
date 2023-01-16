import React from 'react';
import { BsPatchQuestion } from 'react-icons/bs';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a href='/fiches' className='navbar-brand'>
          <div className='d-flex'>
            <BsPatchQuestion alt='logo' className='mr-2' />
            <div>Quizoo</div>

            {isAuthenticated ? (
              <div>
                <img src={user.picture} alt={user.name} />
                <LogoutButton />
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
