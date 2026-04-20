import React, { useEffect, useState } from "react";

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/portfolio")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>

      {items.map((item, index) => (
        <div key={index}>
          {item.name} - Qty: {item.quantity}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
