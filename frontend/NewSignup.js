import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function handleSignup(e){

e.preventDefault();

try{

const res = await fetch("http://localhost:5000/api/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password
})
});

const data = await res.json();

if(res.ok){

alert("Account created successfully");
navigate("/login");

}else{

alert(data.message || "Signup failed");

}

}catch(err){

alert("Server error");

}

}

return(

<div className="content">

<div className="authBox">

<h2>Create Account</h2>

<form onSubmit={handleSignup}>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">

Create Account

</button>

</form>

<p>

Already have an account?  
<Link to="/login"> Sign In</Link>

</p>

</div>

</div>

)

}

export default Signup;
