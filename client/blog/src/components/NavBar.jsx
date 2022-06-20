import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Logout from './Log/Logout';

const NavBar = () => {
  const uid = useContext(UidContext);
  const userConnectData = useSelector((state) => state.user.user.pseudo);

  return (
    <div>
      <img src='' alt='logo-blog' />
      <h2>Stack-BLOG</h2>
      {uid ? (
        <ul>
          <li>
            <h5>Bienvenue {userConnectData}</h5>
          </li>
          <li>
            <div className='logout'>
              <Logout />
            </div>
            <div className='logout-popup'>
              <p>Logout</p>
            </div>
          </li>
        </ul>
      ) : (
        <Link to='/log'>
          <img src='./assets/SVG/login.svg' alt='login' />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
