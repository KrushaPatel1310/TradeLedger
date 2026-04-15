import React, { useState } from "react";

function Settings(){

const [settings,setSettings] = useState({
price:true,
news:true,
buy:true,
sell:true,
portfolio:true,
crash:true
});

function toggle(key){
setSettings(prev=>({
...prev,
[key]:!prev[key]
}));
}

return(

<div className="content">

<h1 className="dashboardTitle">Settings</h1>

<h2>Trading Instructions</h2>

<ul>

<li>This platform is a virtual stock trading simulator.</li>
<li>New users receive ₹1,00,000 starting balance.</li>
<li>Stock prices update automatically based on market simulation.</li>
<li>News may increase or decrease stock prices.</li>
<li>You can buy or sell stocks anytime from the dashboard.</li>
<li>All trades are recorded in the History section.</li>

</ul>


<h2 style={{marginTop:"40px"}}>Notification Preferences</h2>


<div className="settingsRow">
<span>Stock Price Alerts</span>
<div
className={`toggle ${settings.price ? "on":"off"}`}
onClick={()=>toggle("price")}
>
<div className="circle"></div>
</div>
</div>

<div className="settingsRow">
<span>Market News Notifications</span>
<div
className={`toggle ${settings.news ? "on":"off"}`}
onClick={()=>toggle("news")}
>
<div className="circle"></div>
</div>
</div>

<div className="settingsRow">
<span>Buy Order Confirmation</span>
<div
className={`toggle ${settings.buy ? "on":"off"}`}
onClick={()=>toggle("buy")}
>
<div className="circle"></div>
</div>
</div>

<div className="settingsRow">
<span>Sell Order Confirmation</span>
<div
className={`toggle ${settings.sell ? "on":"off"}`}
onClick={()=>toggle("sell")}
>
<div className="circle"></div>
</div>
</div>

<div className="settingsRow">
<span>Portfolio Value Updates</span>
<div
className={`toggle ${settings.portfolio ? "on":"off"}`}
onClick={()=>toggle("portfolio")}
>
<div className="circle"></div>
</div>
</div>

<div className="settingsRow">
<span>Market Crash Alerts</span>
<div
className={`toggle ${settings.crash ? "on":"off"}`}
onClick={()=>toggle("crash")}
>
<div className="circle"></div>
</div>
</div>

</div>

)

}

export default Settings;
