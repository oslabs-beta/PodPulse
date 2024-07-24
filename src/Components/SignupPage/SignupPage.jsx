import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SignupPage.module.scss';

export default function SignUp() {
  const navigate = useNavigate();

  const createUser = async () => {
    console.log('sign up button clicked');
    const newUsername = document.getElementById('userInput').value;
    const newPassword = document.getElementById('pwInput').value;
    console.log('user', newUsername, 'pass', newPassword);
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
      <div className='createBox'>
        <p id='prompt'>Create your account and login.</p>
        <input id='userInput' type='text' placeholder='UserName' />
        <input id='pwInput' type='text' placeholder='PassWord' />
        <button id='buttons' onClick={createUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
