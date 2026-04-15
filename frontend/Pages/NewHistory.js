import React, { useEffect, useState } from "react";

function History(){

const [history,setHistory] = useState([]);

useEffect(()=>{

const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
setHistory(savedHistory);

},[]);

return(

<div className="content">

<h1 className="dashboardTitle">Transaction History</h1>

{history.length === 0 ? (

<p>No transactions yet.</p>

) : (

<table className="marketTable">

<thead>

<tr>
<th>Stock</th>
<th>Type</th>
<th>Price</th>
<th>Quantity</th>
<th>Profit/Loss</th>
</tr>

</thead>

<tbody>

{history.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td className={item.type==="BUY" ? "green" : "red"}>
{item.type}
</td>

<td>₹{item.price}</td>

<td>{item.qty}</td>

<td className={item.profit >= 0 ? "green":"red"}>
₹{item.profit}
</td>

</tr>

))}

</tbody>

</table>

)}

</div>

)

}

export default History;
