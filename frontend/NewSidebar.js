import React from "react";
import { Link } from "react-router-dom";
import { Home, Wallet, PieChart, Clock, Newspaper, Settings, LogIn } from "lucide-react";
import { User } from "lucide-react";
function Sidebar(){

const token = localStorage.getItem("token");

return(

<div className="sidebar">

<h2 className="logo">Virtual Stock Market</h2>

{!token && (
<Link to="/login" className="menuItem">
<User className="menuIcon"/>
<span>Login</span>
</Link>
)}

<Link to="/" className="menuItem">
<Home className="menuIcon"/>
<span>Dashboard</span>
</Link>

<Link to="/wallet" className="menuItem">
<Wallet className="menuIcon"/>
<span>Wallet</span>
</Link>

<Link to="/portfolio" className="menuItem">
<PieChart className="menuIcon"/>
<span>Portfolio</span>
</Link>

<Link to="/history" className="menuItem">
<Clock className="menuIcon"/>
<span>History</span>
</Link>

<Link to="/news" className="menuItem">
<Newspaper className="menuIcon"/>
<span>News</span>
</Link>

<Link to="/settings" className="menuItem">
<Settings className="menuIcon"/>
<span>Settings</span>
</Link>

</div>

)

}

export default Sidebar;
