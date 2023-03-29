import { React, useEffect, useState } from 'react';
import LastTransactionPanel from '../components/LastTransactionPanel';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';
import Services from '../components/Services';

const Home = () =>{

    return (
        <div className='home'>
         <Navbar userName={'Testuser'}/>
            <div className='container-fluid'>
                <div className='row bg-info'>
                    <div className='col col-lg-6 col-12 lefthalf bg-info'>
                        div1
                     </div>
                    <div className='col col-lg-6 col-12 righthalf bg-secondary'>
                        div2 
                        <button className='btn btn-primary'>button</button>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Home;