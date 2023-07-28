const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/playerStats/:firstName/:middleName?/:lastName', async (req, res) => {
  const { firstName, middleName, lastName } = req.params;

  try {

    let URL;

    if(middleName) {
      URL = `https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22goals%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22assists%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=0&limit=50&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20seasonId%3C=20222023%20and%20seasonId%3E=20222023%20and%20skaterFullName%20likeIgnoreCase%20%22%25${firstName}%20${middleName}%20${lastName}%25%22`
    } else {
      URL = `https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22goals%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22assists%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=0&limit=50&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20seasonId%3C=20222023%20and%20seasonId%3E=20222023%20and%20skaterFullName%20likeIgnoreCase%20%22%25${firstName}%20${lastName}%25%22`;
    }
    console.log("URL", URL)
    const response = await axios.get(URL);
    const stats = response.data.data;
    res.json(stats);
  } catch (error) {
    console.log('fetch stats error:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});