import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {GiTeamIdea} from 'react-icons/gi'

const Home = () =>{

    return (
        <div className='home'>
         <Navbar userName={'Testuser'}/>
            <div id="header" className='headersection'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-12 mx-auto'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 leftheader'>
                                <h1>CHASE YOUR DREAMS WITH US</h1>
                                <h5 className='my-3'>
                                    We exist to assist you managing your financial plannings and
                                    celebrate your financial achievements
                                </h5>
                                <div className='mt-3'>
                                    <NavLink to="" className='btn btn-color btn-bg-color createacc'>
                                        Create Account
                                    </NavLink>
                                    <NavLink to="" className='btn btn-color btn-bg-color login'>
                                        Login
                                    </NavLink>
                                </div>
                            
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={require('../images/homepic2.jpg')} className='img-fluid' alt="header img" />
                            </div>
                            <br></br>
                            <br></br>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            {/* jumbotron */}
            <div className="jumbotron jumbotron-fluid happyBankingtext">
              <div class="container textcontainer">
                <h1 class="display-4 pb-3">Happy Banking with US</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <br></br><br></br><br></br>
            {/* value section */}
            <div class="container value-grid">
                <div class="row gridrow">
                    <div class="col p-3 value1">
                        <h4>Integrity</h4>
                        <p>Displaying the highest level of integrity in the way we conduct our business</p>
                    </div>
                    <div class="col p-3 value1">
                        <h4>Demonstrate</h4>
                        <p>Demonstrating a strong will to win in the market place</p>
                    </div>
                    <div class="col p-3 value1">
                        <h4>Diversity</h4>
                        <p>Promoting diversity in the work place and community</p>
                    </div>
                    <div class="col p-3 value1">
                        <GiTeamIdea/>
                        <h4>Teamwork</h4>
                        <p>Our work culture promotes and values teamwork the most</p>
                    </div>
                 </div>
                 <div class="row gridrow">
                    <div class="col p-3 value1">
                        <h4>Collaboration</h4>
                        <p>Displaying the highest level of integrity in the way we conduct our business</p>
                    </div>
                    <div class="col p-3 value1">
                        <h4>Technology</h4>
                        <p>Harnessing the power of technology to deliver better customer experience</p>
                    </div>
                    <div class="col p-3 value1">
                        <h4>Corporate</h4>
                        <p>Setting the standard for the best corporate citizenship in the communities we work</p>
                    </div>
                    <div class="col p-3 value1">
                        <h4>Digital</h4>
                        <p>Best digital platform for online banking</p>
                    </div>
                 </div>
            </div>
            <br></br><br></br><br></br>
            {/* testimonials */}
            <div className="jumbotron jumbotron-fluid happyBankingtext">
              <div class="container textcontainer">
                <h1 class="display-4 pb-3">TESTIMONIALS</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <br></br><br></br><br></br>
            {/* About us route */}
            <div className='container-fluid aboutushome'>
                <div className='col col-10 mx-auto'>
                <div className='row'>
                    <div className='col col-md-6 order-1'>
                    <img src={require('../images/moneytree.jpg')} className='img-fluid home-moneytree' alt="header img" />
                    </div>
                    <div className='col col-md-6 order-1'>
                        <h2>Wissen Bank at a Glance</h2>
                        <p>Wissen Bank is one of India’s leading private banks and was among the first to receive approval from the Reserve Bank of India (RBI) to set up a private sector bank in 1994.
                            Today, Wissen Bank has a banking network of 6,499 branches and 18,868 ATM's in 3,226 cities/towns.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>
                </div>
            </div>
            <br></br><br></br><br></br>
            {/* Our Services */}
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='container-fluid mb-5 p-5 servicecontainer'>
                <div className='row'>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                            <div class="card">
                            <img src={require('../images/photo3.jpg')} className='card-img-top cardimg' alt="card img" />
                                <div class="card-body">
                                    <h5 class="card-title">Life Insurance</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                             <div class="card">
                             <img src={require('../images/photo1.jpg')} className='card-img-top cardimg' alt="card img" />
                                 <div class="card-body">
                                    <h5 class="card-title">Health Insurance</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                         <div class="card">
                         <img src={require('../images/photo2.jpg')} className='card-img-top cardimg' alt="card img" />
                        <div class="card-body">
                          <h5 class="card-title">Home Loans</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                      </div>
                    </div>    
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;