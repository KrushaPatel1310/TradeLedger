import React, { useEffect, useState } from "react";

function Wallet(){

const [balance,setBalance] = useState(100000);
const [transactions,setTransactions] = useState([]);

useEffect(()=>{

const savedBalance = localStorage.getItem("walletBalance");
const savedTransactions = JSON.parse(localStorage.getItem("walletTransactions")) || [];

if(savedBalance){
setBalance(Number(savedBalance));
}

setTransactions(savedTransactions);

},[]);

const income = transactions
.filter(t => t.type === "SELL")
.reduce((sum,t)=>sum + t.amount,0);

const expense = transactions
.filter(t => t.type === "BUY")
.reduce((sum,t)=>sum + t.amount,0);

return(

<div className="content">

<h1 className="dashboardTitle">Wallet</h1>


{/* WALLET CARD */}

<div className="walletCard">

<div>

<p className="walletLabel">Available Balance</p>

<h1 className="walletAmount">
₹{balance.toLocaleString()}
</h1>

</div>

<div className="walletIcon">
💰
</div>

</div>


{/* WALLET STATS */}

<div className="walletStats">

<div className="walletStatBox income">

<p>Total Income</p>
<h2>₹{income.toLocaleString()}</h2>

</div>

<div className="walletStatBox expense">

<p>Total Expense</p>
<h2>₹{expense.toLocaleString()}</h2>

</div>

</div>



{/* TRANSACTION HISTORY */}

<h2 style={{marginTop:"40px"}}>Transaction History</h2>

{transactions.length === 0 ? (

<p style={{opacity:0.7}}>No wallet transactions yet.</p>

) : (

<table className="walletTable">

<thead>
<tr>
<th>Type</th>
<th>Stock</th>
<th>Amount</th>
<th>Time</th>
</tr>
</thead>

<tbody>

{transactions.map((t,index)=>(

<tr key={index}>

<td className={t.type==="BUY" ? "red":"green"}>
{t.type}
</td>

<td>{t.stock}</td>

<td>₹{t.amount}</td>

<td>{t.time}</td>

</tr>

))}

</tbody>

</table>

)}

</div>

)

}

export default Wallet;
