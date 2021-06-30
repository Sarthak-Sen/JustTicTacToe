import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el != null);

  return (
    <h2>
      {winner && `${winner} WINS!`}
      {!winner && !noMovesLeft && `Next Player: ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'TIED!'}
    </h2>
  );
};

export default StatusMessage;
