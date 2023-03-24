import { React, useEffect, useState } from 'react';

const base_url = 'http://localhost:8090';

const MoneyTransfer = () =>{

    // const [fromAccount, setFromAccount] = useState("Select");
    // const [receiverBank, setReceiverBank] = useState("Select");
    // const [toAccount, setToAccount] = useState("");
    // const [amount, setAmount] = useState("");

    const [formData, setFormData] = useState({
        "senderAccountNo": "Select",
        "receiverBankName": "Select",
        "receiverAccountNo": "",
        "amount": ""
    })

    const banks = [
        {"BankId": "1", "Name": "SBI", "Address": "Delhi", "IfscCode": "11", "BranceName": "Delhi"},
        {"BankId": "2", "Name": "AXIS", "Address": "Lucknow", "IfscCode": "12", "BranceName": "Lucknow"},
        {"BankId": "3", "Name": "HDFC", "Address": "Mumbai", "IfscCode": "13", "BranceName": "Mumbai"},
        {"BankId": "4", "Name": "PNB", "Address": "Dehradun", "IfscCode": "14", "BranceName": "Dehradun"},
        {"BankId": "5", "Name": "ICICI", "Address": "Bengaluru", "IfscCode": "15", "BranceName": "Bengaluru"}
    ];

    const accounts = [
        {"AccountNumber": "111", "AccountType": "Savings", "Balance": "15", "RegisteredDate": "24/03/2023", "UserID": "201"},
        {"AccountNumber": "112", "AccountType": "Current", "Balance": "20", "RegisteredDate": "24/03/2023", "UserID": "202"},
    ];

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const getBankObj = (bankName) => banks.filter(bank => bank.Name === bankName);

    const getAccountObj = (accountNumber) => accounts.filter(account => account.AccountNumber === accountNumber);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        let bank = getBankObj(formData['receiverBankName']);
        let bankId;
        if (bank.length>0){
            bankId = bank[0].BankId;
        }
        let senderAccount = getAccountObj(formData['senderAccountNo']);
        let receiverAccount = getAccountObj(formData['receiverAccountNo']);
        
        let senderUserId;
        let receiverUserId;

        if (senderAccount.length> 0 && receiverAccount.length>0){
            senderUserId = senderAccount[0].UserID;
            receiverUserId = receiverAccount[0].UserID;
        }

        setFormData(prev=>({
            ...prev,
            'bankId': bankId,
            'senderUserId': senderUserId,
            'receiverUserId': receiverUserId,
        }))

        console.log(formData);

        fetch(`${base_url}/insertTransactions`, {method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)})
        .then(res => res.json())
        .then(res => console.log(res));

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
            <select name="senderAccountNo" value={formData['senderAccountNo']} required onChange={handleChange}>
                <option>Select</option>
                {accounts.map((account, i) => <option key={i}>
                    {account.AccountNumber}
                </option>)}
            </select>
            <label htmlFor="user">From Account</label>
            </div>

            <div className="input-wrapper">
            <select name="receiverBankName" value={formData['receiverBankName']} required onChange={handleChange}>
            <option>Select</option>
                {banks.map((bank, i)=> <option key={i}>{bank.Name}</option>)}

            </select>
            <label htmlFor="user">Select Receiver's Bank</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="user" name="receiverAccountNo" value={formData['receiverAccountNo']} required onChange={handleChange}/>
            <label htmlFor="user">To Account</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="user" name="amount" value={formData['amount']} required onChange={handleChange}/>
            <label htmlFor="user">Amount</label>
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