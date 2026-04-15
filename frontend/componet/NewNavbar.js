import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

return(

<div className="navbar">

<input
type="text"
placeholder="Search stocks..."
className="searchBox"
/>

<button
className="walletButton"
onClick={()=>navigate("/wallet")}
>
💰 Wallet
</button>

</div>

)

}

export default Navbar;
