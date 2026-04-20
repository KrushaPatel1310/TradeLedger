import React, { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/history")
      .then(res => res.json())
      .then(data => setHistory(data));
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>

      {history.map((item, index) => (
        <div key={index}>
          {item.type} {item.name} Qty:{item.qty}
        </div>
      ))}
    </div>
  );
}

export default History;
