import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: isActive ? "black" : "white", 
        color: isActive ? "white" : "black", 
        border: "1px solid lightgray",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
