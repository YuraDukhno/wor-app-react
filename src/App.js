import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Game from "./Components/Game";

// Function for cardDeck initialization.
// Create array with 52 card. For times from 1 to 13.
const fillTheDeck = () => {
  let newDeck = [];
  let counter = 1;
  while (newDeck.length !== 52) {
    newDeck.push(counter);
    counter++;
    if (counter === 14) counter = 1;
  }
  return newDeck;
};

function App() {
  const [cardDeck, setCardDeck] = useState(() => fillTheDeck());
  const [pc, setPc] = useState({
    fullName: "",
    wins: 0,
    loses: 0,
    games: 0,
    cards: [],
  });

  const [player, setPlayer] = useState({
    fullName: "PC",
    wins: 0,
    loses: 0,
    games: 0,
    cards: [],
  });

  // Handout the cardDeck for two players randomly.
  const handOut = () => {
    let forHandOut = [...cardDeck];
    let newPlayer = player;
    let newPcPlayer = pc;
    let playerOneDeck = [];
    let playerTwoDeck = [];
    let counter = 0;

    for (let i = 52; i > 0; i--) {
      const random = Math.floor(Math.random() * forHandOut.length);
      const card = parseInt(forHandOut.splice(random, 1));

      counter % 2 === 0 ? playerOneDeck.push(card) : playerTwoDeck.push(card);
      counter++;
    }
    newPlayer.cards = playerOneDeck;
    newPcPlayer.cards = playerTwoDeck;
    setCardDeck(newPlayer);
    setPc(newPcPlayer);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "600px",
        minHeight: "600px",
      }}
    >
      <Router>
        <Route
          exact
          path="/"
          component={() => {
            return <Main handOut={handOut} />;
          }}
        />
        <Switch>
          <Route
            exact
            path="/Game"
            component={() => {
              return <Game pc={pc} player={player} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
