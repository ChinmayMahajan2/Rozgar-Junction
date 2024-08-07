import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import './LogIn.css'

import loginImage from '../../../images/login.jpg';
import { Link } from 'react-router-dom';


export default function Login() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Container  w-screen h-screen" style={{backgroundColor: 'rgb(211 177 244)'} }>
        <div className="mainBox logMain" style={ {boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)'}}>
          <div className='content leftHalf'>
            <img src={loginImage}></img>
          </div>
          <div className='content rightHalf'>
            <div className='data'>
              <h2>Welcome back!</h2>
              <form>
                <input placeholder='Enter Email'></input>
                <input placeholder='Enter Password'></input>
                <h4>Forgot Password ?</h4>
              </form>
              <button className='logSignButton bg-gray-800'>Log In</button>
              <h3>OR</h3>
              <div>New to Rozgar_Junction ? <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-purple-950">Sign Up</Link> to get started</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
