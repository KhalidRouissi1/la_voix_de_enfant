/* Login.js */

import React, { useState } from 'react';

const Login = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminNameChange = (e) => {
    setAdminName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log('Admin Name:', adminName);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image"></div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="adminName">Admin Name:</label>
              <input
                type="text"
                id="adminName"
                value={adminName}
                onChange={handleAdminNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
