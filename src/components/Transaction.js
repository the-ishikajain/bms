const Transaction=(props)=>{
    return(
        <div className="container t-container">
            <h6>Rec. Account: {props.account} </h6>
            <h6>Amount: {props.amount}</h6>
            <p>Date:{props.timestamp}</p>
        </div>
    )
}

export default Transaction;