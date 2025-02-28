import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../../public/images/logo2.png';

export default function Header() {
  const navigate = useNavigate();
  const logOutUser = () => {
    fetch('/logout').then(() => {
      alert('you have been logged out');
      navigate('/');
    });
  };

  return (
    <header className={`${styles.header} barlow m regular`}>
      <div>
        <img className={styles.logo} src={logo} alt='PodPulse logo'></img>
      </div>
      <div className={`${styles.navigation} barlow m regular`}>
        <nav>
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <button className='btn-2' onClick={logOutUser}>
                LogOut
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
