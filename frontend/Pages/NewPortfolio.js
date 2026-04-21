import React, { useEffect, useState } from "react";

function Portfolio() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  function loadPortfolio() {
    fetch("http://localhost:8080/api/portfolio")
      .then(res => res.json())
      .then(data => setItems(data));
  }

  return (
    <div className="content">

      <h1 style={{ marginBottom: "25px" }}>
        Portfolio
      </h1>

      {items.length === 0 ? (

        <p>No Stocks Purchased</p>

      ) : (

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#0f172a",
            color: "white",
            borderRadius: "12px",
            overflow: "hidden"
          }}
        >

          <thead>
            <tr style={{ background: "#1e293b" }}>
              <th style={th}>Stock Name</th>
              <th style={th}>Quantity</th>
              <th style={th}>Buy Price</th>
              <th style={th}>Total Value</th>
            </tr>
          </thead>

          <tbody>

            {items.map((item, index) => (

              <tr key={index} style={{ textAlign: "center" }}>

                <td style={td}>{item.name}</td>

                <td style={td}>{item.quantity}</td>

                <td style={td}>
                  ₹{item.buyPrice}
                </td>

                <td style={td}>
                  ₹{(item.quantity * item.buyPrice).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

const th = {
  padding: "15px",
  fontSize: "18px"
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #1e293b"
};

export default Portfolio;
