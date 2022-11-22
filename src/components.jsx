export const Calculator = ({ children }) => {
  return <div className="calculator">{children}</div>;
};

export const Screen = ({ result }) => {
  return <div className="screen">{result}</div>;
};

export const Buttons = ({ value, idName, funcName, sign, butId }) => {
  return (
    <div id={idName}>
      <button className="buttons" onClick={funcName} value={value} id={butId}>
        {sign}
      </button>
    </div>
  );
};
