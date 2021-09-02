import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const emptyBoard = Array(9).fill("");

  const handleCellClick = (index) => {
    if (board[index] !== "") {
      alert("Posição ocupada pô!");
      return null;
    }

    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // const emptyBoard = [
  //   "O", "X", "X",
  //   "O", "X", "X",
  //   "O", "X", "X"
  // ];

  const [currentPlayer, setCurrentPlayer] = useState("O");

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) alert("O venceu!!");
      if (cells.every((cell) => cell === "X")) alert("X venceu!!");
    });
  };

  useEffect(checkWinner);

  const [board, setBoard] = useState(emptyBoard);
  return (
    <main>
      <h1 className="title">Jogo Da Velha</h1>

      <div className="board">
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

export default TicTacToe;
