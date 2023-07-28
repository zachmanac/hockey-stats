import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerStats from './components/PlayerStats';
import SearchForm from './components/SearchForm';


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
      <div className='w-[90%] bg-white rounded p-8 h-[90%]'>
        <h1 className="text-5xl text-center text-red-500 bg-black rounded pb-3">Hockey Stats App</h1>
        <SearchForm />

        <PlayerStats playerStats={playerStats} />
      </div>
    </div>
  );
}

export default App;
