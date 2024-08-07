import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import './LogIn.css'
import { Link } from 'react-router-dom';

export default  function Signup() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [age, setAge] = useState(0)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  

  const handleAge = (e)=>{
      const now = new Date();
      const year = now.getFullYear();
      const a = new Date(e.target.value)
      const birthYear = a.getFullYear()

      setAge(year - birthYear)
  }
  
  const authText = (e)=>{
      const value = e.target.value;
      const regex = /[^a-zA-Z]/;
      if(regex.test(value)){
          alert("Input contains non alphabet characters")

          if(nameRef.current){
              nameRef.current.value = ''
          }
      }
  }

  const authEmail = (e)=>{
      const value = e.target.value;
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      if(!regex.test(value)){
          alert("Invalid Email")

          if(emailRef.current){
              emailRef.current.value = ''
          }
      }
  }

  return (
    <div>
      <div className="Container w-screen h-screen" style={{backgroundColor: 'rgb(211 177 244)'} }>
            <header className='bg-gray-800'>
                <h1>Hey! Welcome to our community</h1>
                <h3>Fill out the below details to get to know many job opportunities</h3>
            </header>
            <div className="mainBox" style={ {boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)'}}>
                <div className="signMain" >
                    <form className='SignInForm'>
                        <div className='labelInput'>
                            <label>Full Name</label>
                            <input ref={nameRef} placeholder='Enter your full name' type='text' onChange={authText} required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Email</label>
                            <input ref={emailRef} onBlur={authEmail} placeholder='eg. abc@gmail.com' type='email' required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Mobile Number</label>
                            <input placeholder='eg. 90xxxxxxxx' type='number' required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Birth Date</label>
                            <input placeholder='eg. -+' type='date' onChange={handleAge} required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Password</label>
                            <input placeholder='Enter Password' required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Confirm Password</label>
                            <input placeholder='Confirm Password' required></input>
                        </div>
                        <div className='labelInput'>
                            <label>Gender</label>
                            <div className="radioGroup">
                                <label><input type="radio" name="male" required/> Male </label>
                                <label><input type="radio" name="female" /> Female</label>
                                <label><input type="radio" name="other" /> Other</label>
                            </div>
                        </div>


                        <div className='labelInput'>
                            <label>Age</label>
                            <input value={age} type='number' required></input>
                        </div>
                    </form>
                    <button className='logSignButton S  bg-gray-800' style={ {boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)'}}>Sign In</button>
                    <div>Already have an account ? <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-purple-950">Log In</Link></div>
                </div>

            </div>
        </div>
    </div>
  );
}
