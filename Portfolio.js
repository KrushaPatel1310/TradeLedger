import React, { useEffect, useState } from "react";

function Portfolio() {

const [portfolio, setPortfolio] = useState([]);

useEffect(() => {

const savedPortfolio = JSON.parse(localStorage.getItem("portfolio")) || [];
setPortfolio(savedPortfolio);

}, []);

return (

<div className="content">

<h1 className="dashboardTitle">My Portfolio</h1>

{portfolio.length === 0 ? (

<p>No stocks purchased yet.</p>

) : (

<table className="portfolioTable">

<thead>
<tr>
<th>Stock</th>
<th>Quantity</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{portfolio.map((item, index) => (

<tr key={index}>
<td>{item.name}</td>
<td>{item.qty}</td>
<td>₹{item.price}</td>
</tr>

))}

</tbody>

</table>

)}

</div>

);

}

export default Portfolio;