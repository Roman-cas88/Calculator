export const Calculator = ({ children }) => {
  return <div className="calculator">{children}</div>;
};

export const Screen = ({ result }) => {
  return <div className="screen">{result}</div>;
};

export const Buttons = ({ value, idName, funcName }) => {
  return (
    <div className="buttons" onClick={funcName} id={idName}>
      {value}
    </div>
  );
};
