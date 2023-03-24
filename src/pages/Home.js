import { React, useEffect, useState } from 'react';
import LastTransactionPanel from '../components/LastTransactionPanel';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';
import Services from '../components/Services';

const Home = () =>{

    const [transactions, setTransactions] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:8090/getAllTransactions')
        .then(res => res.json())
        .then(res => setTransactions(res));
    }, []);

    return (
        <div className='home'>
        <Navbar userName={'Testuser'}/>
        <Panel/>
        <Services/>
        </div>
    );
}

export default Home;