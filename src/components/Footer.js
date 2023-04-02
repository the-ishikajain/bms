import { NavLink } from "react-router-dom";
import {FaFacebookF} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () =>{
    return (
        <>
    <div class="footerclass bg-dark pt-5 pt-4">
      <div class="container-fluid">
        <div class="row text-center">
          <div class="col-lg-3 column1">
            <img src={require('../images/wissenlogo1.png')} className='footerlogo' alt='logotext'/>
            <hr class="light"/>
           
            <p>Sector 52,Noida 201309</p>
            <p>Contact number 12345</p>
            <p>Email address WissenBank@gmail.com</p>
          </div>
          <div class="col-lg-3 column2">
            <h5 class="menuheading text-white">PRODUCTS</h5>
            <br/><br/>
            <ul class="explorelist">
              <li><NavLink class="footerlink text-decoration-none" href="#">CSR Activities</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Online Banking</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">News</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Ongoing Campaign</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Updates</NavLink></li>
              
            </ul>
            
          </div>
          <div class="col-lg-3 column3">
            <h5 class="menuheading text-white">GET STARTED</h5>
            <br/><br/>
            <ul class="explorelist">
              <li><NavLink class="footerlink text-decoration-none" href="#">Career</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Contact Us</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Government Securities</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Examples</NavLink></li>
            </ul>
          </div>
          <div class="col-lg-3 column4">
            <h5 class="menuheading text-white">ABOUT</h5>
            <br/><br/>
            <ul class="explorelist">
              <li><NavLink class="footerlink text-decoration-none" href="#">Wissen Bank at a glance</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Mission,Vission & values</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Board of directors</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Corporate Governance</NavLink></li>
            </ul>
          </div>

          
          <div class="row align-items-center icons">
            <div class="col-md-5 col-lg-4">
              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item icon">
                    <NavLink href="#" class="btn-floating btn-sm text-white"><i class="fab fa-facebook"></i></NavLink>
                  </li>
                  <li class="list-inline-item icon">
                    <NavLink href="#" class="btn-floating btn-sm text-white" ><i class="fab fa-twitter"></i></NavLink>
                  </li>
                  <li class="list-inline-item icon">
                    <NavLink href="#" class="btn-floating btn-sm text-white"><i class="fab fa-youtube"></i></NavLink>
                  </li>
                  <li class="list-inline-item icon">
                    <NavLink href="#" class="btn-floating btn-sm text-white"><i class="fab fa-linkedin-in"></i></NavLink>
                  </li>
                  <li class="list-inline-item icon">
                    <NavLink href="#" class="btn-floating btn-sm text-white"><i class="fab fa-instagram"></i></NavLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
  
        </div>
      </div>
    </div>
        </>
    );
}

export default Footer;