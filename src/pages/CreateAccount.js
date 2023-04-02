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
        Select type of the account :
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="1">Current</option>
            <option value="2">Saving</option>
        </select>
        <br></br>
        <br></br>
        <input class="btn btn-danger btn-lg" type="submit" value="Submit"></input>
      
        <br></br>
            <br></br>
            <Footer/>
        
      </div>
        
    );
}

export default CreateAccount;