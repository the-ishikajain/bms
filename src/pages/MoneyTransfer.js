import { React, useEffect } from 'react';

const MoneyTransfer = () =>{
    const handleSubmit = () =>{
        alert('submitted');
    }

    useEffect(()=>{
        fetch('http://localhost:8090/getAllTransactions')
        .then(res => res.json())
        .then(res => console.log(res))
    }, [])
    return (
        <div className='money-transfer'>
            <h1>Money Transfer</h1>
            <br></br>
            <form onSubmit={handleSubmit}>
            
            <div className="input-wrapper">
            <select required>
                <option>Demo</option>
                <option>Demo</option>
                <option>Demo</option>
                <option>Demo</option>

            </select>
            <label for="user">From Account</label>
            </div>

            <div className="input-wrapper">
            <select required>
                <option>Demo</option>
                <option>Demo</option>
                <option>Demo</option>
                <option>Demo</option>

            </select>
            <label for="user">Select Receiver's Bank</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="user" required/>
            <label for="user">To Account</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="user" required/>
            <label for="user">Amount</label>
            </div>
            <br></br>
            <div className='buttons'>
                <button className='cancel-btn'>Cancel</button>
                <button type="submit" className='submit-btn'>Submit</button>
            </div>
            </form>
        </div>
    );
}

export default MoneyTransfer;