// src/App.js
import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [formula, setFormula] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const handleClick = (value) => {
    if (evaluated) {
      if (/[0-9.]/.test(value)) {
        setInput(value);
        setFormula(value);
      } else {
        setInput("0");
        setFormula(input + value);
      }
      setEvaluated(false);
    } else {
      if (/[0-9.]/.test(value)) {
        setInput(input === "0" ? value : input + value);
        setFormula(formula + value);
      } else if (/[+\-*/]/.test(value)) {
        if (/[+\-*/]$/.test(formula)) {
          setFormula(formula.slice(0, -1) + value);
        } else {
          setFormula(formula + value);
        }
        setInput(value);
      }
    }
  };

  const handleClear = () => {
    setInput("0");
    setFormula("");
    setEvaluated(false);
  };

  const handleEvaluate = () => {
    try {
      const result = eval(formula);
      setInput(result.toString());
      setFormula(formula + "=" + result);
      setEvaluated(true);
    } catch (error) {
      setInput("Error");
      setEvaluated(true);
    }
  };

  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
      setFormula(formula + ".");
    }
  };

  return (
    <div id="calculator">
      <div id="display">{input}</div>
      <button id="clear" onClick={handleClear}>
        AC
      </button>
      <button id="divide" onClick={() => handleClick("/")}>
        /
      </button>
      <button id="multiply" onClick={() => handleClick("*")}>
        *
      </button>
      <button id="seven" onClick={() => handleClick("7")}>
        7
      </button>
      <button id="eight" onClick={() => handleClick("8")}>
        8
      </button>
      <button id="nine" onClick={() => handleClick("9")}>
        9
      </button>
      <button id="subtract" onClick={() => handleClick("-")}>
        -
      </button>
      <button id="four" onClick={() => handleClick("4")}>
        4
      </button>
      <button id="five" onClick={() => handleClick("5")}>
        5
      </button>
      <button id="six" onClick={() => handleClick("6")}>
        6
      </button>
      <button id="add" onClick={() => handleClick("+")}>
        +
      </button>
      <button id="one" onClick={() => handleClick("1")}>
        1
      </button>
      <button id="two" onClick={() => handleClick("2")}>
        2
      </button>
      <button id="three" onClick={() => handleClick("3")}>
        3
      </button>
      <button id="equals" onClick={handleEvaluate}>
        =
      </button>
      <button id="zero" onClick={() => handleClick("0")}>
        0
      </button>
      <button id="decimal" onClick={handleDecimal}>
        .
      </button>
    </div>
  );
};

export default Calculator;
