import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './LoginPage.scss';

export default function loginPage() {
  const navigate = useNavigate();
  const signup = () => {
    navigate('/CreateUser');
  };

  const loginAuth = async (event) => {
    event.preventDefault();
    console.log('login button clicked');
    const newUsername = document.getElementById('Userinput').value;
    const newPassword = document.getElementById('PWinput').value;
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
    <div className='mainlogin'>
      <p id='logo'>Pod Pulse</p>
      <div className='loginBox'>
        <p id='prompt'>Input your login credentials or make a new account.</p>
        <input id='Userinput' type='text' placeholder='UserName' />
        <input id='PWinput' type='text' placeholder='PassWord' />
        <button id='buttons' onClick={loginAuth}>
          Log In
        </button>
        <button id='buttons' onClick={signup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
