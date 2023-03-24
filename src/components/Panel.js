import AccountsPanel from "./AccountsPanel";
import LastTransactionPanel from "./LastTransactionPanel";

const Panel = () =>{
    return (
        <div className="panel">
            <LastTransactionPanel/>
            <AccountsPanel/>
        </div>
    );
}

export default Panel;