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
    alert(`Logging in with ${platform}...`);
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
