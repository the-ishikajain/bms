import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import MoneyTransfer from "./pages/MoneyTransfer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoneyTransfer/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
