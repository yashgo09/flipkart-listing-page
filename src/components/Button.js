import React from "react";

function Button({ text, type, clickHandler }) {
  return (
    <button className="btn" data-type={type} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
