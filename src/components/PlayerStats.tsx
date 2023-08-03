import React from 'react';

interface PlayerStatsProps {
  playerStats: Array<{
    playerId: number;
    skaterFullName: string;
    gamesPlayed: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    penaltyMinutes: number;
  }>;
}

const PlayerStats = ({ playerStats }: PlayerStatsProps) => {
  console.log('playerStats: in playerstats component', playerStats);

  return (
    <div>
      {playerStats.length === 0 ? (
        <div></div>
      ) : (
        <div className='bg-gray-100 w-[90%] mx-auto text-center min-w-full'>
        <div className='grid grid-cols-7 font-bold'>
          <p className='text-left'>Name</p>
          <p>GP</p>
          <p>Goals</p>
          <p>Assists</p>
          <p>Points</p>
          <p>+/-</p>
          <p>PIM</p>
        </div>
        <div>
          {playerStats.map((player: any) => (
            <div key={player.playerId} className='grid grid-cols-7'>
              <p className='text-left'>{player.skaterFullName}</p>
              <p>{player.gamesPlayed}</p>
              <p>{player.goals}</p>
              <p>{player.assists}</p>
              <p>{player.points}</p>
              <p>{player.plusMinus}</p>
              <p>{player.penaltyMinutes}</p>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default PlayerStats;