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

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/moneyTransfer" element={<MoneyTransfer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
