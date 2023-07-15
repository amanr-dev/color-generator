import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(10);
  const [list, setList] = useState(new Values("#0e7bc4").all(amount));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(amount);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        <label>
          Results/%
          <input
            type="number"
            value={amount}
            min="1"
            max="10"
            // placeholder="1 - 10"
            onChange={(e) => {
              let numb = parseInt(e.target.value);
              setAmount(numb);
            }}
          />
        </label>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
