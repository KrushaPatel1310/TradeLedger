import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import History from "./pages/History";
import News from "./pages/News";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";
import StockPage from "./pages/StockPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App(){

return(

<Router>

<div className="appLayout">

<Sidebar/>

<div className="mainContent">

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/portfolio" element={<Portfolio/>}/>
<Route path="/history" element={<History/>}/>
<Route path="/news" element={<News/>}/>
<Route path="/settings" element={<Settings/>}/>
<Route path="/wallet" element={<Wallet/>}/>
<Route path="/stock/:name" element={<StockPage/>}/>

{/* Login & Signup Routes */}

<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

</div>

</div>

</Router>

)

}

export default App;
