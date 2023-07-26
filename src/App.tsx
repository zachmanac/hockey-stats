import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [playerStats, setPlayerStats] = useState<any>([]);

  // MUST GO TO: https://cors-anywhere.herokuapp.com/
  // TO GET IT TO WORK

  const firstName = 'Alex';
  const lastName = 'Ovechkin';

  const getPlayerStats = async (firstName: string, lastName: string) => {
    try {
      const URL = `https://cors-anywhere.herokuapp.com/https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22goals%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22assists%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=0&limit=50&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20seasonId%3C=20222023%20and%20seasonId%3E=20222023%20and%20skaterFullName%20likeIgnoreCase%20%22%25${firstName}%20${lastName}%25%22`;

      const response = await axios.get(URL);
      console.log("response.data:", response.data)

      const stats = response.data.data; // Access the 'data' property of the API response

      console.log("stats", stats);

      setPlayerStats(stats); // Update the playerStats state with the fetched data

    } catch (error) {
      console.log('fetch stats error:', error);
    }
  };

  useEffect(() => {
    getPlayerStats(firstName, lastName); // Call the API when the component mounts
  }, [firstName, lastName]);

  return (
    <div className="bg-gray-500 h-screen flex items-center justify-center">
      <div className='max-w-lg mx-auto bg-white rounded p-8 shadow-md'>
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
