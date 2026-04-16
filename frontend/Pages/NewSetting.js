import React, { useState } from "react";

function Settings(){

const [notifications,setNotifications] = useState(true);
const [news,setNews] = useState(true);
const [priceAlert,setPriceAlert] = useState(true);

return(

<div className="content">

<h1>Settings</h1>

<div className="settingsBox">

<h3>Account Settings</h3>

<p>Initial Wallet Balance: ₹20,000</p>
<p>Trading Mode: Virtual Simulation</p>

</div>


<div className="settingsBox">

<h3>Notifications</h3>

<div className="settingList">

<div className="settingItem">
<span>Trade Alerts</span>
<button onClick={()=>setNotifications(!notifications)}
className={notifications ? "toggleOn" : "toggleOff"}>
{notifications ? "ON" : "OFF"}
</button>
</div>

<div className="settingItem">
<span>Market News</span>
<button onClick={()=>setNews(!news)}
className={news ? "toggleOn" : "toggleOff"}>
{news ? "ON" : "OFF"}
</button>
</div>

<div className="settingItem">
<span>Price Alerts</span>
<button onClick={()=>setPriceAlert(!priceAlert)}
className={priceAlert ? "toggleOn" : "toggleOff"}>
{priceAlert ? "ON" : "OFF"}
</button>
</div>

</div>

</div>


<div className="settingsBox">

<h3>Instructions</h3>

<ul>
<li>Start with ₹20,000 virtual balance</li>
<li>Buy and sell stocks using market price</li>
<li>Track your portfolio performance</li>
<li>Monitor profit and loss</li>
<li>Check history for transactions</li>
<li>Use market news for decisions</li>
</ul>

</div>

</div>

)

}

export default Settings;
