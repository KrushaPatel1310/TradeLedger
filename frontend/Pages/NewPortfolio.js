import React, { useEffect, useState } from "react";

function Portfolio() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/portfolio")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="content">
      <h1>Portfolio</h1>

      {items.length === 0 ? (
        <p>No Stocks Purchased</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            {item.name} | Qty: {item.quantity}
          </div>
        ))
      )}
    </div>
  );
}

export default Portfolio;
