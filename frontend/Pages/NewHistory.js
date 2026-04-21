import React, { useEffect, useState } from "react";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/history")
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="content">
      <h1>Transaction History</h1>

      {history.length === 0 ? (
        <p>No History Found</p>
      ) : (
        history.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
