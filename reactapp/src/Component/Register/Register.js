import React, { useState } from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Bar/Sidebar';
import axios from 'axios';

export default function () {
  const[username,setFirstName]=useState(''); 
  //const[lastName,setLastName]=useState(''); 
  const[emailid,setEmail]=useState('');
  const[mobileno,setMobileNo]=useState('');
  const[password,setPassword]=useState(''); 
    //const[confirmPassword,setConfirmassword]=useState('');
    const navigate=useNavigate();

    const details={username,emailid,password,mobileno}
     
    const formHolder =async(e) =>{
      e.preventDefault();
   
  if(emailid.length===0 && password.length===0 && username.length===0 )
  {
    alert("Enter All the fields")
  }
  else
  {
    await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
    navigate("/login")
  }
     
  }

    
  return (
    <div className='reg'>
        <Sidebar/>
         <div className='rectangle071'>
         
         </div>
         <div className='rectangle072'>
             <p>Registration</p>
             <form onSubmit={formHolder}>
                <label>UserName&nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your firstname' value={username}  onChange={(e)=>setFirstName(e.target.value)} required></input><br/>
                
                {/*<label>LastName &nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your lastname' value={lastName}  onChange={(e)=>setLastName(e.target.value)} required></input><br/>*/}
                
                <label className='email07'>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='email' placeholder='Enter your email' value={emailid}  onChange={(e)=>setEmail(e.target.value)} required></input><br/>
                
                <label>Mobile No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your PhoneNo' value={mobileno}  onChange={(e)=>setMobileNo(e.target.value)} required></input><br/>
                
                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='password' placeholder='Enter your password' value={password}  onChange={(e)=>setPassword(e.target.value)} required></input><br/>
                
                {/*<label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='password' placeholder='Enter your password' value={confirmPassword}  onChange={(e)=>setConfirmassword(e.target.value)} required></input><br/>*/}
                
              

              <button type='submit' className='sub07'>SUBMIT</button>
              <Link to='/'><button  className='can07'>CANCEL</button></Link>
              </form>
         </div>
    </div>
  )
}
