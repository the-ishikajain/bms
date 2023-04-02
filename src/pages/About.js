import { React } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard,Scrollbar,Pagination, Navigation } from "swiper";

import Images from '../components/Images';
import {FaStar} from 'react-icons/fa';
import Footer from '../components/Footer';

const About = () =>{
    return (
        <div className='about'>
           
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
            <br></br>
            <br></br>
            
            <div className='container'>
                <div class="card text-center p-5">
                     
                    <div class="card-body">
                        <h5 class="card-title">Who we are</h5>
                        <p class="card-text">Wissen Bank is one of India’s leading private banks and was among the first to receive approval from the Reserve Bank of India (RBI) to set up a private sector bank in 1994.
                            Today, Wissen Bank has a banking network of 6,499 branches and 18,868 ATM's in 3,226 cities/towns.Wissen Bank operates in a highly automated environment powered by information technology and communication systems. All branches have online connectivity which enables speedy funds transfer for customers. Multi-branch access is also provided to retail customers through the branch network and Automated Teller Machines (ATMs).
We have made substantial efforts and investments in acquiring the best technology available internationally to build the infrastructure for a world class bank.
                        </p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    
                </div>
            </div>
            <br/><br/>
            <div className='container swiper-container'>
            <h2>Board of Directors</h2>
            <hr/>
            <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        loop={true}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slider'>
            <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img3.jpeg')} alt=""/>
                    </div> 
                    <h2>Joy Birla</h2>   
                    <p>Chairman</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img2.jpg')} alt=""/>
                    </div> 
                    <h2>John Doe</h2>   
                    <p>Chief Executive Officer</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/images1.jpg')} alt=""/>
                    </div> 
                    <h2>Aman Roy</h2>   
                    <p>Independent Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img4.jpg')} alt=""/>
                    </div> 
                    <h2>Jay Shetty</h2>   
                    <p>Independent Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img5.jpg')} alt=""/>
                    </div> 
                    <h2>Alia Roy</h2>   
                    <p>Non Executive Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img6.jpg')} alt=""/>
                    </div> 
                    <h2>Riya Garg</h2>   
                    <p>Independent Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img7.jpg')} alt=""/>
                    </div> 
                    <h2>Elon Musk</h2>   
                    <p>Independent Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'>
                    <img src={require('../images/img9.jpg')} alt=""/>
                    </div> 
                    <h2>Luna Sun</h2>   
                    <p>Non Executive Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container membersection'>
                <div className='card membercard'>
                    <div className='image'><img src={require('../images/img8.jpg')} alt=""/>
                    
                    </div> 
                    <h2>Dawn Joy</h2>   
                    <p>Deputy Managing Director</p>
                </div>
                
            </section>
        </SwiperSlide>
        
      </Swiper>
    </div>
            <br></br>
            <br></br>
            
            <div className='container director-cards'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card ">
    <img src={require('../images/bank1.jpg')} className="card-img-top" alt="" height="265px"/>
      <div class="card-body">
        <h5 class="card-title">Wissen Bank in India</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../images/media.jpeg')} className="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">News and Media</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../images/handshake.jpg')} className="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Investor Relations</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../images/careers.avif')} className="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Careers</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../images/diversity.jpg')} className="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Inclusive</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../images/purpose.jpg')} className="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Purpose and Values</h5>
      </div>
    </div>
  </div>
</div>
            </div>




            <br></br>
            <br></br>
            <Footer/>
        </div>
    );
}

export default About;