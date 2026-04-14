import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import stocks from "../data/stocks";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";

function StockPage(){

const { name } = useParams();

const [stock,setStock] = useState(null);
const [chartData,setChartData] = useState([]);
const [qty,setQty] = useState(1);


/* LOAD STOCK */

useEffect(()=>{

const foundStock = stocks.find(
s => s.name.toLowerCase() === name.toLowerCase()
);

setStock(foundStock);

},[name]);



/* GENERATE CHART */

function generateChart(type){

let data = [];
let basePrice = stock ? stock.price : 100;

let points = 24;

if(type==="1D") points = 24;
if(type==="1M") points = 40;
if(type==="1Y") points = 80;
if(type==="2Y") points = 120;
if(type==="5Y") points = 160;
if(type==="ALL") points = 220;

for(let i=0;i<points;i++){

// wave movement
let wave = Math.sin(i/3) * 120;

// random volatility
let random = (Math.random()-0.5) * 200;

// occasional spike
if(Math.random() > 0.92){
random += (Math.random()-0.5)*600;
}

basePrice += wave + random;

data.push({
time:i,
price:Math.max(100, Math.round(basePrice))
});

}

setChartData(data);

}


/* INITIAL CHART */

useEffect(()=>{
if(stock){
generateChart("1D");
}
},[stock]);



/* BUY STOCK */

function buyStock(){

if(!stock) return;

const wallet = Number(localStorage.getItem("walletBalance")) || 100000;

const totalCost = stock.price * qty;

if(totalCost > wallet){
alert("Not enough wallet balance");
return;
}

const newBalance = wallet - totalCost;

localStorage.setItem("walletBalance",newBalance);


/* UPDATE PORTFOLIO */

let portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];

const existing = portfolio.find(p=>p.name===stock.name);

if(existing){
existing.qty += qty;
}else{
portfolio.push({
name:stock.name,
qty:qty,
price:stock.price
});
}

localStorage.setItem("portfolio",JSON.stringify(portfolio));


/* UPDATE HISTORY */

let history = JSON.parse(localStorage.getItem("history")) || [];

history.unshift({
type:"BUY",
name:stock.name,
qty:qty,
price:stock.price,
time:new Date().toLocaleString()
});

localStorage.setItem("history",JSON.stringify(history));

alert(`Bought ${qty} shares of ${stock.name}`);

}



/* SELL STOCK */

function sellStock(){

if(!stock) return;

let portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];

const existing = portfolio.find(p=>p.name===stock.name);

if(!existing || existing.qty < qty){
alert("Not enough shares to sell");
return;
}


/* UPDATE WALLET */

const wallet = Number(localStorage.getItem("walletBalance")) || 100000;

const sellValue = stock.price * qty;

const newBalance = wallet + sellValue;

localStorage.setItem("walletBalance",newBalance);


/* UPDATE PORTFOLIO */

existing.qty -= qty;

if(existing.qty === 0){
portfolio = portfolio.filter(p=>p.name !== stock.name);
}

localStorage.setItem("portfolio",JSON.stringify(portfolio));


/* UPDATE HISTORY */

let history = JSON.parse(localStorage.getItem("history")) || [];

history.unshift({
type:"SELL",
name:stock.name,
qty:qty,
price:stock.price,
time:new Date().toLocaleString()
});

localStorage.setItem("history",JSON.stringify(history));

alert(`Sold ${qty} shares of ${stock.name}`);

}



if(!stock){

return(
<div className="content">
<h2>Stock not found</h2>
</div>
)

}



return(

<div className="content">

<div className="stockHeader">

<h1>{stock.name}</h1>

<div className="stockPrice">

<span className="priceValue">
₹{stock.price.toLocaleString()}
</span>

<span className={stock.change >= 0 ? "priceUp":"priceDown"}>

{stock.change >= 0 ? "▲":"▼"} {Math.abs(stock.change).toFixed(2)}%

</span>

</div>

</div>



<div className="timeFilters">

<button onClick={()=>generateChart("1D")}>1D</button>
<button onClick={()=>generateChart("1M")}>1M</button>
<button onClick={()=>generateChart("1Y")}>1Y</button>
<button onClick={()=>generateChart("2Y")}>2Y</button>
<button onClick={()=>generateChart("5Y")}>5Y</button>
<button onClick={()=>generateChart("ALL")}>ALL</button>

</div>



<div style={{width:"100%",height:350,marginTop:20}}>

<ResponsiveContainer>

<LineChart data={chartData}>

<CartesianGrid stroke="#1e293b" strokeDasharray="3 3"/>

<XAxis dataKey="time" stroke="#94a3b8"/>

<YAxis stroke="#94a3b8"/>

<Tooltip/>

<Line
type="monotone"
dataKey="price"
stroke="#22c55e"
strokeWidth={3}
dot={false}
/>

</LineChart>

</ResponsiveContainer>

</div>



<div className="stockLayout">


<div className="tradePanel">

<h3 className="tradeTitle">Trade</h3>

<div className="tradeInputBox">

<label>Quantity</label>

<input
type="number"
value={qty}
min="1"
onChange={(e)=>setQty(Number(e.target.value))}
/>

</div>

<div className="tradeValue">
Total Value: ₹{(stock.price * qty).toLocaleString()}
</div>

<div className="tradeButtons">

<button className="buyBtn" onClick={buyStock}>
Buy
</button>

<button className="sellBtn" onClick={sellStock}>
Sell
</button>

</div>

</div>



<div className="companyInfo">

<h3>Company Information</h3>

<p><b>Volume:</b> {stock.volume}</p>
<p><b>Market Cap:</b> {stock.marketCap}</p>

</div>

</div>

</div>

)

}

export default StockPage;