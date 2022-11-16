import { Buttons, Calculator, Screen } from "./components";
import "./styles.css";

export default function App() {
  let result = 0;

  const change = () => {};
  const perc = () => {};
  const divd = () => {};
  const multiply = () => {};
  const mins = () => {};
  const pls = () => {};
  const eqls = () => {};

  return (
    <div className="App">
      <Calculator>
        <Screen result={result} />
        <Buttons value="AC" idName="ac" />
        <Buttons value="+/-" funcName={change} idName="changeSign" />
        <Buttons value="%" funcName={perc} idName="percent" />
        <Buttons value="/" funcName={divd} idName="divide" />
        <Buttons value="x" funcName={multiply} idName="multiply" />
        <Buttons value="-" funcName={mins} idName="minus" />
        <Buttons value="+" funcName={pls} idName="plus" />
        <Buttons value="=" funcName={eqls} idName="equals" />
        <Buttons value="1" idName="num1" />
        <Buttons value="2" idName="num2" />
        <Buttons value="3" idName="num3" />
        <Buttons value="4" idName="num4" />
        <Buttons value="5" idName="num5" />
        <Buttons value="6" idName="num6" />
        <Buttons value="7" idName="num7" />
        <Buttons value="8" idName="num8" />
        <Buttons value="9" idName="num9" />
        <Buttons value="0" idName="num0" />
        <Buttons value="." idName="point" />
      </Calculator>
    </div>
  );
}
