import React, { useEffect, useState } from "react";
import newsTemplates from "../data/news";

function News(){

const [news,setNews] = useState([]);


/* GENERATE NEWS */

function generateNews(){

const randomNews =
newsTemplates[Math.floor(Math.random()*newsTemplates.length)];

const newItem = {
...randomNews,
time: new Date().toLocaleTimeString()
};

setNews(prev => [newItem, ...prev.slice(0,9)]);

}


/* AUTO UPDATE NEWS */

useEffect(()=>{

generateNews();

const interval = setInterval(()=>{

generateNews();

},150000); // 2.5 minutes

return ()=>clearInterval(interval);

},[]);



return(

<div className="content">

<h1 className="dashboardTitle">Live Market News</h1>

<div className="rightPanel">

{news.map((n,i)=>(

<div key={i} className="infoBox">

<div className="marketRow">

<p>{n.title}</p>

<span className={n.impact==="positive" ? "green":"red"}>

{n.impact==="positive" ? "▲":"▼"}

</span>

</div>

<small>{n.time}</small>

</div>

))}

</div>

</div>

)

}

export default News