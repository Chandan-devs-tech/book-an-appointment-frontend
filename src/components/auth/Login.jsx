/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import styles from "./login.module.css"

const Login = () => {
  const [name, setname] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(dispatch, { name });
    if (success) {
      navigate('/vehicles'); // Redirect to '/vehicles' on successful login
    }
  };
  return (
    <div className= {styles.LoginDiv}>
      <form className= {styles.LoginForm}>
        <h2>Login to your account</h2>
        <input onChange={(e) => setname(e.target.value)} type="text" name="" id="" placeholder="Enter your username " />
        <button type="submit" onClick={handleLogin} >Login</button>
        <p>
          Don&apos;t have an account?
          <Link to="/register" className={styles.LoginLink}>
            &nbsp; create an account...
          </Link>
        </p>
      </form>
    </div>
  )
};

export default Login;