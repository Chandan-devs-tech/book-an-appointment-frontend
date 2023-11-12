/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../redux/apiCalls';

const Register = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const registerUser = (e) => {
    e.preventDefault()
    createUser(dispatch, { name })
  }
  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h2>Create a new account</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter your name" />
        <button onClick={registerUser} type="submit">Signup</button>
        <p>
          Have an account?
          <Link to="/login" className="Loginlink">
            &nbsp; Login...
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;