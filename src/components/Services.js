import {RiAccountCircleLine} from 'react-icons/ri';
import {BsCashCoin} from 'react-icons/bs';
import {FaRegListAlt} from 'react-icons/fa';
import {MdOutlineNoAccounts} from 'react-icons/md';
import {TbPigMoney} from 'react-icons/tb';
import {TbCalendarTime} from 'react-icons/tb'
import {FiArrowRightCircle} from 'react-icons/fi';
import { IconContext } from 'react-icons';
const Services = () =>{
    return(
        <IconContext.Provider value={{color:'#146C94',size:'2rem'}}>
        <div className='container-fluid service-container'>
            <h1>How can we help you today?</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5 services">
            
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      
      <div class="card-body">
      <RiAccountCircleLine/>
        <h5 class="card-title">Create Account</h5>
        <FiArrowRightCircle/>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <FaRegListAlt/>
        <h5 class="card-title">Transaction History</h5>
        <FiArrowRightCircle alignmentBaseline='right'/>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <TbCalendarTime/>
        <h5 class="card-title">Monthy Payment Details</h5>
        <FiArrowRightCircle/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
      <BsCashCoin/>
        <h5 class="card-title">Money Transfer</h5>
        <FiArrowRightCircle/>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <TbPigMoney/>
        <h5 class="card-title">Buy Service</h5>
        <FiArrowRightCircle/>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <MdOutlineNoAccounts/>
        <h5 class="card-title">Block Net Banking</h5> 
        <div className='nextarrow'><FiArrowRightCircle/></div>
        
       
      </div>
    </div>
  </div>
</div>
</div>
</IconContext.Provider>  
    );
}

export default Services;