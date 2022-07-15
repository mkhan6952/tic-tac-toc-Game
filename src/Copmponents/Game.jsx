import React, { useState } from "react";
import Box from "./Box";
import "./game.css";

const board = [[], [], []];

const Game = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const toggleChange = (row, column) => {
    board[row][column] = turn;
    setTurn((turn) => (turn === "X" ? "Y" : "X"));

    console.log(board);

    const winner = checkForWin();

    if (!winner) {
      setWinner("No winner yet");
    } else {
      setWinner("Player " + winner + " Won");
    }
  };
  // console.log(turn);

  function checkForWin() {
    //for row test
    for (let i = 0; i < board.length; i++) {
      const row = board[i];

      if (row[0] == row[1] && row[1] == row[2] && row[0]) {
        return row[0];
      }
    }

    //for colmn test
    for (let i = 0; i < board.length; i++) {
      const el1 = board[0][i];
      const el2 = board[1][i];
      const el3 = board[2][i];

      if (el1 == el2 && el2 == el3 && el3) {
        return el1;
      }
    }

    //for diagonals 1
    const d1 = board[0][0];
    const d2 = board[1][1];
    const d3 = board[2][2];

    if (d1 == d2 && d2 == d3 && d3) {
      return d1;
    }

    //for diagonals 2
    const dd1 = board[0][2];
    const dd2 = board[1][1];
    const dd3 = board[2][0];

    if (dd1 == dd2 && dd2 == dd3 && dd3) {
      return dd1;
    }
    return false;
  }

  return (
    <div id="game">
      <h1>Tic Tac Toe Game</h1>
      <div
        style={{
          fontSize: "x-large",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {winner}
      </div>
      <div className="row">
        <Box
          row={0}
          column={0}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={0}
          column={1}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={0}
          column={2}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
      </div>
      <div className="row">
        <Box
          row={1}
          column={0}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={1}
          column={1}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={1}
          column={2}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
      </div>
      <div className="row">
        <Box
          row={2}
          column={0}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={2}
          column={1}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
        <Box
          row={2}
          column={2}
          currentplayer={turn}
          changeTurn={toggleChange}
        />
      </div>
    </div>
  );
};

export default Game;
