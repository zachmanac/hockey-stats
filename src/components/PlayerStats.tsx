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
  playerStatsTwo: Array<{
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

const PlayerStats = ({ playerStats, playerStatsTwo }: PlayerStatsProps) => {
  // console.log('playerStats[0]: in playerstats component', playerStats[0]);
  // console.log('playerStatsTwo[0]: in playerstats component', playerStatsTwo[0]);

  const player = playerStats[0];
  const playerTwo = playerStatsTwo[0];

  return (
    <div>
      {playerStats.length === 0 ? (
        <div></div>
      ) : (
        <div className='bg-gray-100 w-[90%] mx-auto text-center min-w-full'>
          <div className='grid grid-cols-7 font-bold text-right pr-2'>
            <p className='text-left pl-2'>Player</p>
            <p>GP</p>
            <p>Goals</p>
            <p>Assists</p>
            <p>Points</p>
            <p>+/-</p>
            <p>PIM</p>
          </div>
          <div key={player.playerId} className={`grid grid-cols-7 text-right pr-2 ${playerStatsTwo.length > 0 ? 'bg-gray-200' : ''}`}>
            <p className='text-left pl-2'>{player.skaterFullName}</p>
            <p>{player.gamesPlayed}</p>
            <p>{player.goals}</p>
            <p>{player.assists}</p>
            <p>{player.points}</p>
            <p>{player.plusMinus}</p>
            <p>{player.penaltyMinutes}</p>
          </div>
          {playerStatsTwo.length > 0 && (
            <div key={playerTwo.playerId} className='grid grid-cols-7 text-right pr-2'>
              <p className='text-left pl-2'>{playerTwo.skaterFullName}</p>
            <p>{playerTwo.gamesPlayed}</p>
            <p>{playerTwo.goals}</p>
            <p>{playerTwo.assists}</p>
            <p>{playerTwo.points}</p>
            <p>{playerTwo.plusMinus}</p>
            <p>{playerTwo.penaltyMinutes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerStats;