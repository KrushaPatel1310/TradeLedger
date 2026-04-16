import React, { useEffect, useState } from "react";

function Wallet(){

const [balance,setBalance] = useState(0);


/* FIX: SET DEFAULT ₹20,000 */

useEffect(()=>{

let storedBalance = localStorage.getItem("walletBalance");

if(!storedBalance || storedBalance === "100000"){
// reset old value
localStorage.setItem("walletBalance",20000);
storedBalance = 20000;
}

setBalance(Number(storedBalance));

},[]);



return(

<div className="content">

<h1>Wallet</h1>

<div className="walletBox">

<h2>Available Balance</h2>

<h1 className="walletAmount">
₹{balance.toLocaleString()}
</h1>

<p className="walletNote">
This is your virtual trading balance.
</p>

</div>

</div>

)

}

export default Wallet;
