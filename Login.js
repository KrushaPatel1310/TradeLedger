import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

async function handleLogin(e){

e.preventDefault();
setLoading(true);

try{

const res = await fetch("http://localhost:5000/api/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
});

const data = await res.json();

if(res.ok){

localStorage.setItem("token",data.token);
localStorage.setItem("user",JSON.stringify(data.user));

alert("Login successful");

navigate("/");

}else{

alert(data.message || "Login failed");

}

}catch(err){

alert("Server error");

}

setLoading(false);

}

return(

<div className="content">

<div className="authBox">

<h2>Sign In</h2>

<form onSubmit={handleLogin}>

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

{loading ? "Logging in..." : "Login"}

</button>

</form>

<p>

Don't have an account?  
<Link to="/signup"> Sign Up</Link>

</p>

</div>

</div>

)

}

export default Login;