import { useState } from "react";
import { Buttons, Calculator, Screen } from "./components";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(0);

  const ac = () => {
    console.log("AC");
  };
  const change = () => {
    console.log("+/-");
  };
  const perc = () => {
    console.log("%");
  };
  const divd = () => {
    console.log("/");
  };
  const multiply = () => {
    console.log("x");
  };
  const mins = () => {
    console.log("-");
  };
  const pls = () => {
    console.log("+");
  };
  const eqls = () => {
    console.log("=");
  };
  const num1 = () => {
    setResult(+1);
    console.log("1");
  };
  const num2 = () => {
    setResult(2);
    console.log("2");
  };
  const num3 = () => {
    setResult(3);
    console.log("3");
  };
  const num4 = () => {
    setResult(4);
    console.log("4");
  };
  const num5 = () => {
    setResult(5);
    console.log("5");
  };
  const num6 = () => {
    setResult(6);
    console.log("6");
  };
  const num7 = () => {
    setResult(7);
    console.log("7");
  };
  const num8 = () => {
    setResult(8);
    console.log("8");
  };
  const num9 = () => {
    setResult(9);
    console.log("9");
  };
  const num0 = () => {
    setResult(0);
    console.log("0");
  };
  const point = () => {
    setResult(".");
    console.log(".");
  };

  return (
    <div className="App">
      <Calculator>
        <Screen result={result} />
        <Buttons value="AC" funcName={ac} idName="ac" />
        <Buttons value="+/-" funcName={change} idName="changeSign" />
        <Buttons value="%" funcName={perc} idName="percent" />
        <Buttons value="/" funcName={divd} idName="divide" />
        <Buttons value="x" funcName={multiply} idName="multiply" />
        <Buttons value="-" funcName={mins} idName="minus" />
        <Buttons value="+" funcName={pls} idName="plus" />
        <Buttons value="=" funcName={eqls} idName="equals" />
        <Buttons value="1" funcName={num1} idName="num1" />
        <Buttons value="2" funcName={num2} idName="num2" />
        <Buttons value="3" funcName={num3} idName="num3" />
        <Buttons value="4" funcName={num4} idName="num4" />
        <Buttons value="5" funcName={num5} idName="num5" />
        <Buttons value="6" funcName={num6} idName="num6" />
        <Buttons value="7" funcName={num7} idName="num7" />
        <Buttons value="8" funcName={num8} idName="num8" />
        <Buttons value="9" funcName={num9} idName="num9" />
        <Buttons value="0" funcName={num0} idName="num0" />
        <Buttons value="." funcName={point} idName="point" />
      </Calculator>
    </div>
  );
}
