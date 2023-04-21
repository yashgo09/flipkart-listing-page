import React from "react";

function Button({ text, type }) {
  return (
    <button className="btn" data-type={type}>
      {text}
    </button>
  );
}

export default Button;
