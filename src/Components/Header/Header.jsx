import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import podpulseLogo from '../../../public/assets/podpulse-logo.png';



export default function Header() {
  const navigate = useNavigate();
  const logOutUser = () => {
    fetch('/logout').then(() => {
      alert('you have been logged out');
      navigate('/');
    });
  };
  console.log('this is the podpulseLogo:', podpulseLogo);
  return (
    <header className={`${styles.header} barlow m regular`}>
      <div><img className={styles.logo} src={require('../../images/podpulse-logo.png').default} alt='PodPulse logo'/></div>
      <div className={styles.navigation}>
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
