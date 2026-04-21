import React, { useEffect, useState } from "react";

function Portfolio() {

  const [items, setItems] = useState([]);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {

    fetch("http://localhost:8080/api/portfolio")
      .then(res => res.json())
      .then(data => setItems(data));

    fetch("http://localhost:8080/api/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));
  }

  function getCurrentPrice(name) {

    const stock = stocks.find(
      s => s.name.toLowerCase() === name.toLowerCase()
    );

    return stock ? stock.price : 0;
  }

  return (
    <div className="content">

      <h1 style={{ marginBottom: "25px" }}>
        Portfolio
      </h1>

      {items.length === 0 ? (

        <p>No Stocks Purchased</p>

      ) : (

        <table style={tableStyle}>

          <thead>
            <tr style={{ background: "#1e293b" }}>
              <th style={th}>Stock</th>
              <th style={th}>Qty</th>
              <th style={th}>Buy Price</th>
              <th style={th}>Current</th>
              <th style={th}>Profit/Loss</th>
              <th style={th}>Total</th>
            </tr>
          </thead>

          <tbody>

            {items.map((item, index) => {

              const current = getCurrentPrice(item.name);
              const profit =
                (current - item.buyPrice) * item.quantity;

              return (

                <tr key={index} style={{ textAlign: "center" }}>

                  <td style={td}>{item.name}</td>

                  <td style={td}>{item.quantity}</td>

                  <td style={td}>
                    ₹{item.buyPrice}
                  </td>

                  <td style={td}>
                    ₹{current}
                  </td>

                  <td
                    style={{
                      ...td,
                      color:
                        profit >= 0
                          ? "#22c55e"
                          : "#ef4444"
                    }}
                  >
                    {profit >= 0 ? "+" : ""}
                    ₹{profit.toLocaleString()}
                  </td>

                  <td style={td}>
                    ₹{(current * item.quantity).toLocaleString()}
                  </td>

                </tr>
              );

            })}

          </tbody>

        </table>

      )}

    </div>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#0f172a",
  color: "white",
  borderRadius: "12px",
  overflow: "hidden"
};

const th = {
  padding: "15px",
  fontSize: "18px"
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #1e293b"
};

export default Portfolio;
