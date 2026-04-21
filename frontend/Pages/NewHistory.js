import React, { useEffect, useState } from "react";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  function loadHistory() {
    fetch("http://localhost:8080/api/history")
      .then(res => res.json())
      .then(data => setHistory(data));
  }

  function convertRow(text) {

    const parts = text.split(" ");

    return {
      type: parts[0],
      stock: parts[1],
      qty: parts[3]
    };
  }

  return (
    <div className="content">

      <h1 style={{ marginBottom: "25px" }}>
        Transaction History
      </h1>

      {history.length === 0 ? (

        <p>No Transaction Found</p>

      ) : (

        <table style={tableStyle}>

          <thead>
            <tr style={{ background: "#1e293b" }}>
              <th style={th}>Type</th>
              <th style={th}>Stock</th>
              <th style={th}>Quantity</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item, index) => {

              const row = convertRow(item);

              return (

                <tr key={index} style={{ textAlign: "center" }}>

                  <td
                    style={{
                      ...td,
                      color:
                        row.type === "BUY"
                          ? "#22c55e"
                          : "#ef4444"
                    }}
                  >
                    {row.type}
                  </td>

                  <td style={td}>
                    {row.stock}
                  </td>

                  <td style={td}>
                    {row.qty}
                  </td>

                  <td style={td}>
                    {row.type === "BUY"
                      ? "🟢 Bought"
                      : "🔴 Sold"}
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

export default History;
