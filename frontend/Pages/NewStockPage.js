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



/* INITIAL GRAPH (FIXED - NO WARNING) */

useEffect(()=>{

if(!stock) return;

let points = [];
let base = stock.price;

let length = 24;

for(let i=0;i<length;i++){

const wave = Math.sin(i/3) * 80;
const random = (Math.random()-0.5) * 150;

base = base + wave + random;

points.push({
time:i,
price:Math.max(100, Math.round(base))
});

}

setChartData(points);

},[stock]);



/* GRAPH FUNCTION (FOR BUTTONS) */

function generateChart(type){

if(!stock) return;

let points = [];
let base = stock.price;

let length = 24;

if(type==="1D") length=24;
if(type==="1M") length=30;
if(type==="1Y") length=50;
if(type==="2Y") length=80;
if(type==="5Y") length=120;
if(type==="ALL") length=160;

for(let i=0;i<length;i++){

const wave = Math.sin(i/3) * 80;
const random = (Math.random()-0.5) * 150;

base = base + wave + random;

points.push({
time:i,
price:Math.max(100, Math.round(base))
});

}

setChartData(points);
}



/* BUTTONS → API PLACEHOLDER */

function buyStock(){
alert("Backend API: BUY STOCK");
}

function sellStock(){
alert("Backend API: SELL STOCK");
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

{/* HEADER */}

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



{/* FILTER BUTTONS */}

<div className="timeFilters">

<button onClick={()=>generateChart("1D")}>1D</button>
<button onClick={()=>generateChart("1M")}>1M</button>
<button onClick={()=>generateChart("1Y")}>1Y</button>
<button onClick={()=>generateChart("2Y")}>2Y</button>
<button onClick={()=>generateChart("5Y")}>5Y</button>
<button onClick={()=>generateChart("ALL")}>ALL</button>

</div>



{/* GRAPH */}

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


{/* TRADE PANEL */}

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



{/* COMPANY INFO */}

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
