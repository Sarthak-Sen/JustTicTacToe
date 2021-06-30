import React, { useState } from 'react';
import { Board } from './components/Board';
import { calculateWinner } from './helper';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board);

  const message = winner
    ? `${winner} WINS!`
    : `Next Player: ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Just Another Tic Tac Toe App!</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <h2>{message}</h2>
    </div>
  );
};

export default App;
