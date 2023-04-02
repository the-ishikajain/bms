import { BrowserRouter, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Home from "./pages/Home";
import About from "./pages/About";
import MoneyTransfer from "./pages/MoneyTransfer";
import Dashboard from "./pages/Dashboard";
import ServicesPage from "./pages/ServicesPage";
import TransactionHistory from "./pages/TransactionHistory";
import CreateAccount from "./pages/CreateAccount";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/moneyTransfer" element={<MoneyTransfer/>}/>
          <Route path="/transactionHistory" element={<TransactionHistory/>}/>
          <Route path="/servicesPage" element={<ServicesPage/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
