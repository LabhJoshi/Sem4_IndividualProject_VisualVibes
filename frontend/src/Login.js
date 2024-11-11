import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {

  const ENDPOINT = 'http://127.0.0.1:8000/api';
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUserName] = useState('');
  const [pass, setPassword] = useState('');
  const [c_pass, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const data = { 'username': username, 'password': pass }
      const email_response = await axios.get(`${ENDPOINT}/get-email/`);
      var db_email = email_response.data['email'];

      var flag = false;
      for (let i = 0; i < db_email.length; i++) {
        if (email === db_email[i]) {
          flag = true;
        }
      }

      const password_verify = await axios.post(`${ENDPOINT}/verify-password/`, data);

      if ((password_verify.data['is_correct']) && (flag)) {
        alert('Login successfull...');
        // localStorage.setItem('username',username);
        window.location.href = `/?user=${username}`;
        localStorage.setItem('username', username);
        // navigate()
      }
      else {
        alert('Invalid Email or Password !!!');
      }

    }
    else {
      if (pass === c_pass) {
        const email_response = await axios.get(`${ENDPOINT}/get-email/`);
        var db_email = email_response.data['email'];

        const username_response = await axios.get(`${ENDPOINT}/get-username/`);
        var db_username = username_response.data['username'];


        let flag = 0;
        for (let i = 0; i < db_email.length; i++) {
          if (email === db_email[i]) {
            flag = 1;
          }
          else if (username === db_username[i]) {
            flag = 2;
          }
        }

        if (flag === 0) {
          const data = { 'username': username, 'email': email, 'password': pass };
          const request = await axios.post(`${ENDPOINT}/register/`, data);
          alert('registration successful !!!');
        }
        else if (flag === 1) {
          alert('Email Already taken !!!');
        }
        else if (flag === 2) {
          alert('Username is already taken !!!');
        }
      }
      else {
        alert("Please enter same passwords");
      }
    }
  }

  return (
    <div className='body'>
      <div className="wrapper">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <form className='login-form' id="form">
          {!isLogin && (
            <div>
              <label className='login-label' htmlFor="firstname-input">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>
              </label>
              <input type="text" name="firstname" id="firstname-input" placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
          )}
          <div>
            <label className='login-label' htmlFor="email-input">
              <span>@</span>
            </label>
            <input type="email" name="email" id="email-input" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <label className='login-label' htmlFor="password-input">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
              </svg>
            </label>
            <input type="password" name="password" id="password-input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          {!isLogin && (
            <div>
              <label className='login-label' htmlFor="repeat-password-input">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
                </svg>
              </label>
              <input type="password" name="repeat-password" id="repeat-password-input" placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
            </div>
          )}
          <button className='login-button' type="submit" onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p>
          {isLogin ? (
            <>
              New here? <a href="#!" onClick={toggleForm}>Create an Account</a>
            </>
          ) : (
            <>
              Already have an Account? <a href="#!" onClick={toggleForm}>Login</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
