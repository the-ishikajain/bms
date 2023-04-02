import { React, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const CreateAccount = () =>{
    
    return (
      
      <div className="services">
        <Navbar/>
        <br></br>
        <br></br>

        <h1 className="headline"> Create Account </h1>
      
        <br></br>
        <br></br>
        <form className="createAccountForm">
        <div className="input-wrapper">
        Full Name :  <input type="text" id="user"/>
         
        </div>
        <br></br>
        <div className="input-wrapper">
        Phone Number :   <input type="text" id="user"/>
           
        </div>
        <br></br>
        <div className="input-wrapper">
        Email Address :  <input type="text" id="user"/>
          
        </div>
        <br></br>
        <div className="input-wrapper">
        Date Of Birth :  <input type="date" id="user"/>
          
        </div>
        <br></br>
        <div className="input-wrapper">
        Select Account Type :
        <br></br>
        <br></br>
        <select class="form-select mb-3">
            <option value="1">Current</option>
            <option value="2">Saving</option>
        </select>
        </div>
        <br></br>
        <div className='hello-btn'>
        <button type="submit" className='btn btn-success btn-lg'>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className='btn btn-danger btn-lg'>Cancel</button>
            </div>
        <br></br>
            <br></br>
            </form>
            <Footer/>
        
      </div>
        
    );
}

export default CreateAccount;