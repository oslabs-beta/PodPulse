import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './LoginPage.module.scss';


export default function loginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('using effect');
    fetch('/auth', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.login === true) {
          navigate('/Namespaces');
        }
      });
  }, []);
  
  const signup = () => {
    navigate('/CreateUser');
  };

  const loginAuth = async (event) => {
    event.preventDefault();
    const newUsername = document.getElementById('userInput').value;
    const newPassword = document.getElementById('pwInput').value;
    
    try {
      const authCheck = await fetch('/login', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          userName: newUsername,
          password: newPassword,
        }),
      });

      const response = await authCheck.json();
      console.log(response);
      if (response.status === 'success') {
        navigate('/Namespaces');
      }
    } catch (err) {
      console.log('error in loginauth');
    }
  };

  return (
    <div className={styles.mainLogin}>
      <h2 className={styles.logo}>Log in to PodPulse</h2>
      <div className={styles.loginBox}>
        <p className={`${styles.prompt} barlow m regular`}>
          Input your login credentials or make a new account.
        </p>
        <input id='userInput' className='input' type='text' placeholder='Username' />
        <input id='pwInput' className={`${styles.pwInput} input`} type='text' placeholder='Password' />
        <button className={`${styles.loginBtn} btn-1`} onClick={loginAuth}>
          Log In
        </button>
        <button className='btn-2' onClick={signup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
