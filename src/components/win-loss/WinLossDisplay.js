import React from 'react';

const WinLossDisplay = (props) => {
  const { playerData } = props;
  playerData.opponents.sort((a, b) => (b.wins + b.losses) - (a.wins + a.losses));
  return (
    <div>
      {playerData.opponents.map(player => {
        return <p key={player.id}>Name: {player.name} Wins: {player.wins} Losses: {player.losses}</p>
      })}
    </div>
  );
}

export default WinLossDisplay;
