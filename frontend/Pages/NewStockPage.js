import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function StockPage() {

  const { name } = useParams();

  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [qty, setQty] = useState(1);

  /* LOAD STOCK */
  useEffect(() => {
    loadStock();
  }, [name]);

  async function loadStock() {

    try {

      const res = await fetch(
        "http://localhost:8080/api/stocks"
      );

      const data = await res.json();

      const found = data.find(
        (item) =>
          item.name.toLowerCase() ===
          decodeURIComponent(name).toLowerCase()
      );

      setStock(found);

      if (found) {
        generateChart(found, "1D");
      }

    } catch (error) {
      console.log("Stock Error");
    }
  }

  /* GRAPH */
  function generateChart(stockData, type) {

    let points = [];
    let base = stockData.price;

    let total = 24;

    if (type === "1D") total = 24;
    if (type === "1M") total = 30;
    if (type === "1Y") total = 12;
    if (type === "2Y") total = 24;
    if (type === "5Y") total = 60;
    if (type === "ALL") total = 120;

    for (let i = 1; i <= total; i++) {

      const wave =
        Math.sin(i / 2) * 30 +
        Math.cos(i / 3) * 20;

      const random =
        (Math.random() - 0.5) * 20;

      base = base + wave + random;

      if (base < 100) base = 100;

      let label = i;

      if (type === "1D") label = i + ":00";
      if (type === "1M") label = i;
      if (type === "1Y") label = i;
      if (type === "2Y") label = i;
      if (type === "5Y") label = i;
      if (type === "ALL") label = i;

      points.push({
        time: label,
        price: Math.round(base)
      });

    }

    setChartData(points);
  }

  function changeGraph(type) {
    generateChart(stock, type);
  }

  function buyStock(){

fetch(
`http://localhost:8080/api/trade/buy?name=${stock.name}&qty=${qty}&price=${stock.price}`
)
.then(res=>res.text())
.then(msg=>alert(msg));

}
 function sellStock(){

fetch(
`http://localhost:8080/api/trade/sell?name=${stock.name}&qty=${qty}&price=${stock.price}`
)
.then(res=>res.text())
.then(msg=>alert(msg));

}

  if (!stock) {
    return (
      <div className="content">
        <h2>Loading Stock...</h2>
      </div>
    );
  }

  return (

    <div className="content">

      {/* HEADER */}
      <div className="stockHeader">

        <h1>{stock.name}</h1>

        <div className="stockPrice">

          <span className="priceValue">
            ₹{stock.price}
          </span>

          <span
            className={
              stock.change >= 0
                ? "priceUp"
                : "priceDown"
            }
          >
            {stock.change >= 0 ? "▲" : "▼"}{" "}
            {Math.abs(stock.change).toFixed(2)}%
          </span>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="timeFilters">

        <button onClick={() => changeGraph("1D")}>1D</button>
        <button onClick={() => changeGraph("1M")}>1M</button>
        <button onClick={() => changeGraph("1Y")}>1Y</button>
        <button onClick={() => changeGraph("2Y")}>2Y</button>
        <button onClick={() => changeGraph("5Y")}>5Y</button>
        <button onClick={() => changeGraph("ALL")}>ALL</button>

      </div>

      {/* GRAPH */}
      <div
        style={{
          width: "100%",
          height: 350,
          marginTop: 20
        }}
      >

        <ResponsiveContainer>

          <LineChart data={chartData}>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* OLD UI RESTORED */}
      <div className="stockLayout">

        {/* LEFT */}
        <div className="tradePanel">

          <h3 className="tradeTitle">
            Trade
          </h3>

          <div className="tradeInputBox">

            <label>Quantity</label>

            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) =>
                setQty(Number(e.target.value))
              }
            />

          </div>

          <div className="tradeValue">

            Total Value: ₹
            {(stock.price * qty).toLocaleString()}

          </div>

          <div className="tradeButtons">

            <button
              className="buyBtn"
              onClick={buyStock}
            >
              Buy
            </button>

            <button
              className="sellBtn"
              onClick={sellStock}
            >
              Sell
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="companyInfo">

          <h3>
            Company Information
          </h3>

          <p>
            <b>Volume:</b> {stock.volume}
          </p>

          <p>
            <b>Market Cap:</b> {stock.marketCap}
          </p>

        </div>

      </div>

    </div>
  );
}

export default StockPage;
