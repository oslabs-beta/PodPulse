import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './LoginPage.scss';
import { useEffect } from 'react';

<<<<<<< HEAD
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
        if (data.login === true ) {
          navigate('/Namespaces');
        }  else {navigate('/')}
      });
  }, []);
  const signup = () => {
    navigate('/CreateUser');
  };
=======
export default function loginPage () {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('using effect')
        fetch('/auth', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then((data) => data.json())
        .then((data) => {
            if(data.login === true){
                navigate('/Nodes')
            }
        })
    }, [])
    
    const signup = () => {
        navigate("/CreateUser");
    }
>>>>>>> d405b81b8701f69d5b276ae4d46c63d9825870d3

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
      } else {alert('incorrect username or password');
        // navigate('/createUser')
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
