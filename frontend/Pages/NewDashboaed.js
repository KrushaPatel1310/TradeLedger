import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stocksData from "../data/stocks";
import newsTemplates from "../data/news";

function Dashboard() {

const navigate = useNavigate();

const [stocks, setStocks] = useState(stocksData);
const [news, setNews] = useState([]);


/* STOCK PRICE UPDATE */

useEffect(() => {

const interval = setInterval(() => {

setStocks(prevStocks => {

return prevStocks.map(stock => {

let change = Number((Math.random() * 2 - 1).toFixed(2));

const newPrice = stock.price + change;

return {
...stock,
price: Math.max(1, Math.round(newPrice)),
change: change
};

});

});

}, 3000);

return () => clearInterval(interval);

}, []);



/* LIVE NEWS */

useEffect(() => {

generateNews();

const interval = setInterval(() => {
generateNews();
}, 120000);

return () => clearInterval(interval);

}, []);



function generateNews() {

const randomNews =
newsTemplates[Math.floor(Math.random() * newsTemplates.length)];

const newItem = {
...randomNews,
time: new Date().toLocaleTimeString()
};

setNews(prev => [newItem, ...prev.slice(0, 5)]);

}



/* TOP GAINERS */

const topGainers =
[...stocks]
.sort((a, b) => Number(b.change) - Number(a.change))
.slice(0, 3);



/* TOP LOSERS */

const topLosers =
[...stocks]
.sort((a, b) => Number(a.change) - Number(b.change))
.slice(0, 3);



return (

<div className="content">

<h1 className="dashboardTitle">Market Dashboard</h1>


{/* MARKET INDEX BAR */}

<div className="marketIndexBar">

{stocks.slice(0,5).map((stock,index)=>(

<div key={index} className="indexItem">

<span className="indexName">{stock.name}</span>

<span className="indexPrice">₹{stock.price}</span>

<span
className={stock.change >= 0 ? "indexUp" : "indexDown"}
>

{stock.change >= 0 ? "+" : ""}{Number(stock.change).toFixed(2)}%

</span>

</div>

))}

</div>



<div className="dashboardLayout">


{/* MARKET TABLE */}

<div className="marketTable">

<table>

<thead>
<tr>
<th>Stock</th>
<th>Price</th>
<th>Change</th>
<th>Volume</th>
<th>Market Cap</th>
</tr>
</thead>

<tbody>

{stocks.map(stock => (

<tr key={stock.id}>

<td
style={{cursor:"pointer",color:"#3b82f6"}}
onClick={() => navigate(`/stock/${stock.name}`)}
>
{stock.name}
</td>

<td>₹{stock.price}</td>

<td style={{color:stock.change > 0 ? "lime" : "red"}}>

{Number(stock.change).toFixed(2)}%

</td>

<td>{stock.volume}</td>

<td>{stock.marketCap}</td>

</tr>

))}

</tbody>

</table>

</div>



{/* RIGHT PANEL */}

<div className="rightPanel">


{/* TOP GAINERS */}

<div className="infoBox">

<h3>Top Gainers</h3>

{topGainers.map((s,i)=>(
<div key={i} className="marketRow">
<span>{s.name}</span>
<span className="green">
{Number(s.change).toFixed(2)}%
</span>
</div>
))}

</div>



{/* TOP LOSERS */}

<div className="infoBox">

<h3>Top Losers</h3>

{topLosers.map((s,i)=>(
<div key={i} className="marketRow">
<span>{s.name}</span>
<span className="red">
{Number(s.change).toFixed(2)}%
</span>
</div>
))}

</div>



{/* LIVE NEWS */}

<div className="infoBox">

<h3>Live Market News</h3>

{news.map((n,i)=>(
<div key={i} className="newsItem">
<p>{n.title}</p>
<span className={n.impact === "positive" ? "green" : "red"}>
{n.impact === "positive" ? "▲" : "▼"}
</span>
</div>
))}

</div>


</div>

</div>

</div>

);

}

export default Dashboard;
