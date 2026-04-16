import React, { useEffect, useState } from "react";

function History(){

const [history,setHistory] = useState([]);
const [loading,setLoading] = useState(true);


/* FETCH FROM BACKEND */

useEffect(()=>{

fetchHistory();

},[]);


async function fetchHistory(){

try{

const res = await fetch("http://localhost:8080/api/history");

const data = await res.json();

setHistory(data);

}catch(err){

console.error("Error fetching history");

}finally{
setLoading(false);
}

}


return(

<div className="content">

<h1>Transaction History</h1>

<div className="historyBox">

{loading ? (

<p>Loading...</p>

) : history.length === 0 ? (

<p>No transactions yet</p>

) : (

<table>

<thead>
<tr>
<th>Type</th>
<th>Stock</th>
<th>Quantity</th>
<th>Price</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{history.map((item,index)=>(

<tr key={index}>

<td className={item.type === "BUY" ? "green":"red"}>
{item.type}
</td>

<td>{item.name}</td>

<td>{item.qty}</td>

<td>₹{item.price}</td>

<td>{item.time}</td>

</tr>

))}

</tbody>

</table>

)}

</div>

</div>

)

}

export default History;
