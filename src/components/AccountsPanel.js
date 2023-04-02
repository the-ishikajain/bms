import { NavLink } from "react-router-dom";
const AccountsPanel = () =>{
    return(
        <div className="container accounts-panel">
            <h2 className="aheading">Choose an account</h2>
                <div className="container accbuttons">
                <div class="row p-4 accrow">
                    <div class="col col-md-6 col-12 acccol">
                       <NavLink to="/AccountView"><button className="btn btn-light btn-large accbutton">Savings Account</button></NavLink> 
                    </div>
                    <div class="col col-md-6 col-12 acccol">
                    <NavLink to="/AccountView"><button className="btn btn-light btn-large accbutton">Current Account</button></NavLink>
                    </div>
                </div>
                <div class="row p-4 accrow">
                    <div class="col col-12 acccol">
                        <button className="btn btn-light btn-large accbutton">Loan Account</button>
                    </div>
                    {/* <div class="col">
                    <button className="btn btn-primary btn-large accbutton">Current Account</button>
                    </div> */}
                </div>
                    
                </div>
                
          
        </div>
    );
}

export default AccountsPanel;