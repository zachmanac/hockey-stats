import React from 'react';

interface PlayerStatsProps {
  playerStats: {
    playerId: number;
    skaterFullName: string;
    gamesPlayed: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    penaltyMinutes: number;
  }[];
}

const PlayerStats = ({ playerStats }: PlayerStatsProps) => {
  console.log('playerStats: in playerstats component', playerStats);

  return (
    <div>
      {playerStats.map((player: any) => (
        <div key={player.playerId} className='bg-gray-100 max-w-lg mx-auto p-4'>
          <p className='text-xl font-semibold'>{player.skaterFullName}</p>
          <p>Games Played: {player.gamesPlayed}</p>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Points: {player.points}</p>
          <p>+/-: {player.plusMinus}</p>
          <p>PIM: {player.penaltyMinutes}</p>
        </div>
      ))}
    </div>
  )
};

export default PlayerStats;