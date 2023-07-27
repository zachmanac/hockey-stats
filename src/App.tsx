import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [playerStats, setPlayerStats] = useState<any>([]);

  const firstName = 'Alex';
  const lastName = 'Ovechkin';

  const getPlayerStats = async (firstName: string, lastName: string) => {
    try {
      const URL = `http://localhost:5000/api/playerStats/${firstName}/${lastName}`;
      const response = await axios.get(URL);
      setPlayerStats(response.data);
    } catch (error) {
      console.log('fetch stats error:', error);
    }
  };

  useEffect(() => {
    getPlayerStats(firstName, lastName); // Call the API when the component mounts
  }, [firstName, lastName]);

  return (
    <div className="bg-gray-500 h-screen flex items-center justify-center">
      <div className='max-w-lg mx-auto bg-white rounded p-8 h-[90%]'>
        <h1 className="text-5xl text-red-500 bg-black rounded">Hello Tailwind CSS!</h1>
        {playerStats && playerStats.map((player: any) => (
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
    </div>
  );
}

export default App;
