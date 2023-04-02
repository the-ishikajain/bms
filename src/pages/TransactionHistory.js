import Transaction from "../components/Transaction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const TransactionHistory = () =>{
    return (
      <div className="ttansaction-hiistory">
        <Navbar/>
        <br></br>
        <br></br>
        <div className="container transaction-panel">
            <div className="col col-12 maincol">
                <h3 className="theading">Previous Transactions</h3>
                <div className="row transaction ">
                       <Transaction account="1234" amount="100" timestamp="d1"/>      
                </div>
                <div className="row transaction">
                <Transaction account="2334" amount="200" timestamp="d2"/> 
                </div>
                <div className="row transaction bg-light">
                <Transaction account="2334" amount="200" timestamp="d2"/> 
                </div>
            </div>
        </div>
        <br></br><br></br>
        <Footer/>
        </div>
    );
}

export default TransactionHistory;