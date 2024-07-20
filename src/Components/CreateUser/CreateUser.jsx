import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './CreateUser.scss'

export default function SignUp () {
    
    const navigate = useNavigate();

    const createUser = async () => {
        console.log('sign up button clicked')
        const newUsername = document.getElementById('Userinputs').value;
        const newPassword = document.getElementById('PWinputs').value;
        console.log("user", newUsername, "pass", newPassword)
        try{
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
        console.log('response is: yay', authCheck)
        if(authCheck.ok === true) {
            navigate('/')
        }
        }
        catch (err) {
            console.log('error in Sign up')
        }
    }
    return (
        <div className="mainlogin">
            <p id="logo">Pod Pulse</p>
            <div className="createBox">
                <p id="prompt">Create your account and login.</p>
                <input id="Userinputs" type="text" placeholder="UserName"/>
                <input id="PWinputs" type="text" placeholder="PassWord" />
                <button id="buttons" onClick={createUser}>Sign Up</button>
                </div> 
        </div>
    )
}