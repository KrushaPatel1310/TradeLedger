import React, { useState } from "react";

function LoginModal({close}){

const [mode,setMode] = useState("login")

return(

<div className="loginOverlay">

<div className="loginBox">

<button className="closeBtn" onClick={close}>
✖
</button>

<h2>

{mode === "login" ? "Login" : "Create Account"}

</h2>

<form>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

{mode === "signup" && (

<input
type="text"
placeholder="Full Name"
/>

)}

<button type="submit">

{mode === "login" ? "Login" : "Create Account"}

</button>

</form>

{mode === "signup" && (

<p className="walletNote">

New accounts receive ₹25,000 starting balance.

</p>

)}

<div className="switchAuth">

{mode === "login" ? (

<p>

Don't have an account?

<span onClick={()=>setMode("signup")}>
 Create Account
</span>

</p>

) : (

<p>

Already have an account?

<span onClick={()=>setMode("login")}>
 Login
</span>

</p>

)}

</div>

</div>

</div>

)

}

export default LoginModal