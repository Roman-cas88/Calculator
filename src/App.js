import { useState } from "react";
import { Buttons, Calculator, Screen } from "./components";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [oper, setOper] = useState();
  const [result, setResult] = useState(0);

  const clickNum = (i) => {
    let click = i.target.value;
    if (number === 0) {
      setNumber(click);
    } else {
      setNumber(number + click);
    }
  };

  const ac = () => {
    setNumber(0);
  };

  const change = () => {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  };

  const perc = (i) => {
    setNumber(number / 100);
  };

  const eqls = () => {
    if (oper === "/") {
      setNumber(parseFloat(result) / parseFloat(number));
    }
    if (oper === "x") {
      setNumber(parseFloat(result) * parseFloat(number));
    }
    if (oper === "-") {
      setNumber(parseFloat(result) - parseFloat(number));
    }
    if (oper === "+") {
      setNumber(parseFloat(result) + parseFloat(number));
    }
  };

  const operator = (i) => {
    let target = i.target.value;
    setOper(target);
    setResult(number);
    setNumber(0);
  };

  return (
    <div className="App">
      <Calculator>
        <Screen result={number} />
        <Buttons sign="AC" funcName={ac} idName="ac" />
        <Buttons sign="+/-" funcName={change} idName="changeSign" />
        <Buttons sign="%" funcName={perc} idName="percent" />
        <Buttons value={"/"} sign="/" funcName={operator} idName="divide" />
        <Buttons value={"x"} sign="X" funcName={operator} idName="multiply" />
        <Buttons value={"-"} sign="-" funcName={operator} idName="minus" />
        <Buttons value={"+"} sign="+" funcName={operator} idName="plus" />
        <Buttons value={"="} sign="=" funcName={eqls} idName="equals" />
        <Buttons value={1} sign="1" funcName={clickNum} idName="num1" />
        <Buttons value={2} sign="2" funcName={clickNum} idName="num2" />
        <Buttons value={3} sign="3" funcName={clickNum} idName="num3" />
        <Buttons value={4} sign="4" funcName={clickNum} idName="num4" />
        <Buttons value={5} sign="5" funcName={clickNum} idName="num5" />
        <Buttons value={6} sign="6" funcName={clickNum} idName="num6" />
        <Buttons value={7} sign="7" funcName={clickNum} idName="num7" />
        <Buttons value={8} sign="8" funcName={clickNum} idName="num8" />
        <Buttons value={9} sign="9" funcName={clickNum} idName="num9" />
        <Buttons
          value={0}
          sign="0"
          funcName={clickNum}
          idName="num0"
          butId="but0"
        />
        <Buttons value={"."} sign="." fisignuncName={clickNum} idName="point" />
      </Calculator>
    </div>
  );
}
