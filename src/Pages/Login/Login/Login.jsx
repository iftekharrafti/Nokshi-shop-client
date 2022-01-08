import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './login.css';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {user, signInUsingGoogle} = useAuth();
  

  const location = useLocation();
  const history = useHistory();

    return (
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <input type="submit" value="Login" className="loginButton" />
        <hr />
      </form>
      <button onClick={() => signInUsingGoogle(location,history)} className="loginButton google"><GoogleIcon style={{fontSize:'14px'}} /> Continue With Google</button>
        <Link to="/register">
        <button className="loginRegisterButton">Register</button>
        </Link>
    </div>
    );
};

export default Login;