import React from "react";

function Square(props) {
  return (
    <button className="sqaure" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
