/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../redux/apiCalls';
import styles from "./Register.module.css"

const Register = () => {
  const [name, setName] = useState('');
  const [full_name, setFullName] = useState('');
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();
    createUser(dispatch, { name, full_name });
  };

  return (
    <div className=  {styles.LoginDiv}>
      <form className={styles.LoginForm}>
        <h2>Create a new account</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        <input onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter your full name" />
        <button onClick={registerUser} type="submit">Signup</button>
        <p>
          Have an account?
          <Link to="/" className={styles.LoginLink}>
            &nbsp; Login...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
