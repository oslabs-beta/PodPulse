import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SignupPage.module.scss';

export default function SignUp() {
  const navigate = useNavigate();

  const createUser = async () => {
    const newUsername = document.getElementById('userInput').value;
    const newPassword = document.getElementById('pwInput').value;

    try {
      const authCheck = await fetch('/createUser', {
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

      // const response = await authCheck.json();
      console.log('response is: yay', authCheck);
      if (authCheck.ok === true) {
        navigate('/');
      }
    } catch (err) {
      console.log('error in Sign up');
    }
  };
  return (
    <div className={styles.mainSignup}>
      <h2 className={styles.h2}>Create a PodPulse account</h2>
      <div className={styles.signupBox}>
        <p className={`${styles.prompt} barlow m regular`}>
          Input a username and a password.
        </p>
        <input
          id='userInput'
          className='input'
          type='text'
          placeholder='Username'
        />
        <input
          id='pwInput'
          className={`${styles.pwInput} input`}
          type='text'
          placeholder='Password'
        />
        <button className={'btn-1'} id='buttons' onClick={createUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
