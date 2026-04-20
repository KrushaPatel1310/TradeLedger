import React, { useEffect, useState } from "react";

function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/wallet")
      .then(res => res.json())
      .then(data => setBalance(data));
  }, []);

  return (
    <div>
      <h1>Wallet</h1>
      <h2>₹ {balance}</h2>
    </div>
  );
}

export default Wallet;
