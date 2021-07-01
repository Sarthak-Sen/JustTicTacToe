import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el != null);

  return (
    <div className="status-message">
      {winner && (
        <>
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          WINS!
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player:{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> TIED!
        </>
      )}
    </div>
  );
};

export default StatusMessage;
