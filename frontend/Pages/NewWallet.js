import React, { useEffect, useState } from "react";

function Wallet() {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    loadWallet();
  }, []);

  function loadWallet() {
    fetch("http://localhost:8080/api/wallet")
      .then(res => res.json())
      .then(data => setBalance(data));
  }

  return (
    <div className="content">

      <h1 style={{ marginBottom: "30px" }}>
        Wallet
      </h1>

      <div
        style={{
          width: "320px",
          padding: "25px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg,#111827,#1e3a8a)",
          color: "white",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)"
        }}
      >

        <p
          style={{
            fontSize: "18px",
            opacity: "0.8"
          }}
        >
          Current Balance
        </p>

        <h2
          style={{
            fontSize: "40px",
            marginTop: "10px"
          }}
        >
          ₹ {Number(balance).toLocaleString()}
        </h2>

        <p
          style={{
            marginTop: "15px",
            color: "#22c55e"
          }}
        >
          Live Wallet Amount
        </p>

      </div>

    </div>
  );
}

export default Wallet;
