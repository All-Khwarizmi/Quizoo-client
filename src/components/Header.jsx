import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsPatchQuestion } from 'react-icons/bs';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Nav justify variant='tabs' activeKey='/home'>
      <Nav.Item>
      
        <Nav.Link href='/fiches'>QuizoO</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href='/'>
          {isAuthenticated
            ? (
                <div className='profile-photo'>
                  <img className='profile-photo' src={user.picture} />
                </div>
              ) 
            : null}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>
          {isAuthenticated ? (
            <div>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};



export default Header;
