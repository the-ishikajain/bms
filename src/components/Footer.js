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
          <div class="col-lg-4 column1">
            <img src={require('../images/wissenlogo1.png')} className='footerlogo' alt='logotext'/>
            <hr class="light"/>
            <p>House No.1005, A2</p>
            <p>Antriksh Nature Apartments</p>
            <p>Sector 52,Noida 201309</p>
            <p>Contact number 123-456-1234</p>
            <p>Email address craftfood23@gmail.com</p>
          </div>
          <div class="col-lg-4 column2">
            <h5 class="menuheading text-white">EXPLORE</h5>
            <br/><br/>
            <ul class="explorelist">
              <li><NavLink class="footerlink text-decoration-none" href="#">Home</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">About</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="https://www.youtube.com/@RanveerBrar">Recipes</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="https://www.indianfoodforever.com/">Our Blog</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="https://www.amazon.in/">Shop</NavLink></li>
              
            </ul>
            
          </div>
          <div class="col-lg-4 column2">
            <h5 class="menuheading text-white">RECENT POSTS</h5>
            <br/><br/>
            <ul class="explorelist">
              <li><NavLink class="footerlink text-decoration-none" href="#">South Indian Breakfasts</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Street Foods of Mumbai</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">So many Biryanis</NavLink></li>
              <li><NavLink class="footerlink text-decoration-none" href="#">Curries of India</NavLink></li>
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