import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Game(props) {
  const [playerCards, setPlayerCards] = useState(props.player.cards);

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
        <h3>Computer</h3>
        {/*  */}

        {/*  */}
        <button>Next</button>
        <h3>You</h3>
        {props.player.cards.map((element) => {
          console.log(props.player.cards);
          console.log(element);
          return <div>{element}</div>;
        })}
        <div>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            New Game
          </Link>
        </div>
      </div>
    </div>
  );
}
