import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import './Login.css'; // Ensure the file is named login.css

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      console.log('Logged in successfully');
      navigate('/');  // Navigate to the home page after successful login
    } catch (error) {
      console.error('Error logging in', error);
      alert(error.message); 
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        
        <span className="sign-up-link" onClick={() => navigate('/Signup')}>
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default Login;
