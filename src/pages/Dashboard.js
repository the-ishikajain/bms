import { React, useEffect, useState } from 'react';
import LastTransactionPanel from '../components/LastTransactionPanel';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Dashboard = () =>{
    const [transactions, setTransactions] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:8090/getAllTransactions')
        .then(res => res.json())
        .then(res => setTransactions(res));
    }, []);
    return (
        <div className='home'>
        <Navbar userName={'Testuser'}/>
        <br></br>
        <br></br>
        <Panel/>
        <br></br>
        <br></br>
        <Services/>
        <br></br>
        <br></br>
        <Footer/>
        </div>
    );
}

export default Dashboard;