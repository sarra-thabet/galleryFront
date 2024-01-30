import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    var url = "http://localhost/art-gallery/backend/loginAdminApi.php";
    var headers = {
      "accept": "application/json",
      "content-type": "application/json"
    };
    var data = {
      user: user,
      pass: pass
    };
  
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => response.text()) // Change to response.text()
      .then(data => {
        // Manually parse the JSON data
        const parsedData = JSON.parse(data);
  
        const { status, message } = parsedData;
  
        if (status === 1) {
          navigate('/AdminInterface/');
          console.log('Login successful');
        } else {
          // Login failed, display error message
          setErrorMessage(message);
        }
      })
      .catch(error => {
        console.error('Error in fetch request:', error);
        setErrorMessage('wrong username or password.');
      });
  };

  return (
    <>
      <div className='admin-login'>
        <form className="form loginForm" onSubmit={handleSubmit}>
          <p className="heading">LOGIN</p>
          <input placeholder="Username" name='username' value={user} className="logininput" type="text" onChange={handleUsernameChange} />
          <input placeholder="Password" name='password' value={pass} className="logininput" type="password" onChange={handlePasswordChange} />
          <span> {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}</span>
          <button className="btn">Submit</button>
         
        </form>
        <button className='back' >
        <a href="/">Back To Home Page</a>
        </button>
       
      </div>
    </>
  );
}
