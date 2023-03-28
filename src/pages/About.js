import { React } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const About = () =>{
    return (
        <div className='about'>
            about
            <Navbar userName={'Testuser'}/>
            <Banner/>
       
            <div className='section2 p-5' >
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col leftcol'>
                          <h4>Our <span>Corporate Office.</span></h4> 
                          <p>Wissen Bank Limited, Corporate Office, Bombay Dyeing Mills Compound, Pandurang Budhkar Marg,Worli, Mumbai - 400 025</p>
                          <p>Tel: (111) 2222 3333</p>
                          <button type="button" class="btn section2button btn-lg">Find nearest ATM</button>
                        </div>
                        <div className='col rightcol'>
                            
                            <div className='bluepatch'>

                            </div>
                            <div className='bankphoto'>
                                <img src='https://images.pexels.com/photos/1422408/pexels-photo-1422408.jpeg' alt='bankbuilding'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='section3 p-5' >
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col rightcol'>
                            <div className='bluepatch'>
                            </div>
                            <div className='bankphoto'>
                                <img src='https://images.pexels.com/photos/1422408/pexels-photo-1422408.jpeg' alt='bankbuilding'/>
                            </div>
                        </div>
                        <div className='col leftcol'> 
                          <h4>Our <span>Corporate Office.</span></h4> 
                          <p>Wissen Bank Limited, Corporate Office, Bombay Dyeing Mills Compound, Pandurang Budhkar Marg,Worli, Mumbai - 400 025</p>
                          <p>Tel: (111) 2222 3333</p>
                          <button type="button" class="btn section2button btn-lg">Find nearest ATM</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;