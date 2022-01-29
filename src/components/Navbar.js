import React from "react";
import LGMlogo from "./logo.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="brand ms-5">
        <img className="navimg" src={LGMlogo} />
      </div>

      <button
        onClick={() => {
          props.handleClick(true);
        }}
        className="btn"
      >
        Get Team
      </button>
    </div>
  );
}
