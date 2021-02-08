import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      <div
        className="start-game__container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "grey",
          minHeight: "300px",
          minWidth: "300px",
        }}
      >
        <h1>Ready for war!</h1>
        <input type="text" placeholder="Enter your Name"></input>
        <div
          onClick={() => props.handOut()}
          className="start-btn"
          style={{
            backgroundColor: "blue",
            color: "white",
            height: "30px",
            width: "120px",
            textAlign: "center",
            borderRadius: "6px",
          }}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="/Game">
            Start the Game
          </Link>
        </div>
      </div>
    </div>
  );
}
