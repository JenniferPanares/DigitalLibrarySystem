// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleSocialLogin = (platform) => {
    let loginUrl = '';

    switch (platform) {
      case 'Facebook':
        loginUrl = 'https://www.facebook.com/login';
        break;
      case 'Gmail':
        loginUrl = 'https://accounts.google.com/signin';
        break;
      case 'Twitter':
        loginUrl = 'https://twitter.com/login';
        break;
      default:
        break;
    }

    window.open(loginUrl, '_blank', 'width=600,height=600');
  };

  const handleRegister = () => {
    alert('Redirecting to registration...');
  };

  return (
    <div className="login-container">
      <h2>Welcome to the Digital Library</h2>

      <div className="login-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div className="divider">or</div>

      <div className="login-buttons">
        <button className="social-btn facebook" onClick={() => handleSocialLogin('Facebook')}>
          Login with Facebook
        </button>
        <button className="social-btn gmail" onClick={() => handleSocialLogin('Gmail')}>
          Login with Gmail
        </button>
        <button className="social-btn twitter" onClick={() => handleSocialLogin('Twitter')}>
          Login with Twitter
        </button>
      </div>

      <button className="register-btn" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Login;
