import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./lockScreen.css"
import shape from "../assets/Rectangle.png"
import logo from "../assets/logo.jpg"
import user from "../assets/User.png"

const Login = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router's navigate function

  const handleAdminNameChange = (e) => {
    setAdminName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Name:', adminName);
    console.log('Password:', password);

    if (adminName === 'khaled' && password === 'khaled') {
      navigate('/home'); 
    } else {
      // Perform other actions or show an error message for incorrect credentials
    }
  };

  return (
    <div className="login-container">
      <div className="formular">
        <img src={user} alt='userIcon' />
        <h1>WELCOME</h1>
        <form onSubmit={handleSubmit}>
          <div className="box">
            <label htmlFor="">Admin name</label>
            <input type="text" className='name' value={adminName} onChange={handleAdminNameChange} />
          </div>
          <div className="box">
            <label htmlFor="">Admin password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <span>Forget password?</span>
          </div>
          <div className="box">
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
      <div className="shapeAndLogo">
        <img src={shape} alt="shape" className='shape' />
        <img src={logo} alt="logo" className='logo' />
      </div>
    </div>
  );
};

export default Login;
