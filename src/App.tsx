import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerStats from './components/PlayerStats';
import SearchForm from './components/SearchForm';


function App() {
  const [playerStats, setPlayerStats] = useState<any[]>([]);
  const [fullName, setFullName] = useState('');

  const getPlayerStats = async (name: string) => {


    try {
      let URL = '';

      const fullName = name.split(' ');

      let firstName = '';
      let middleName = '';
      let lastName = '';

      if (fullName.length === 2) {
        firstName = fullName[0];
        lastName = fullName[1];
        URL = `http://localhost:5000/api/playerStats/${firstName}/${lastName}`;
      } 
      
      if (fullName.length === 3) {
        firstName = fullName[0];
        middleName = fullName[1];
        lastName = fullName[2];
        URL = `http://localhost:5000/api/playerStats/${firstName}/${middleName}/${lastName}`;
      }

      const response = await axios.get(URL);
      setPlayerStats(response.data);
    } catch (error) {
      console.log('fetch stats error:', error);
    }
  };

  useEffect(() => {
    if (fullName.length > 0) {
      getPlayerStats(fullName);
    }
  }, [fullName]);

  console.log("playerstats in app", playerStats);

  return (
    <div className="bg-gray-500 h-screen flex items-center justify-center">
      <div className='w-[90%] bg-white rounded p-8 h-[90%]'>
        <h1 className="text-5xl text-center text-red-500 bg-black rounded pb-3">Hockey Stats App</h1>
        <SearchForm onSearch={getPlayerStats} />
        <PlayerStats playerStats={playerStats} />
      </div>
    </div>
  );
}

export default App;
