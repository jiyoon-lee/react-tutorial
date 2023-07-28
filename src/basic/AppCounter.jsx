import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="total">{`Total Count: ${count}`}</div>
      <Counter onClick={handleClick} />
      <Counter onClick={handleClick} />
    </div>
  );
}
