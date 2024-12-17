import React from "react";
import "./Button.css";

const Button = (props) => {
  const { activeBtn, onClick } = props;
  return (
    <div>
      <button
        onClick={onClick}
        className={activeBtn === props.name ? "btn active" : "btn"}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
