const authorizeRequest = require('./utils/authorizeRequest');

module.exports = async (req, res) => {
  // API Key checking
  if (!authorizeRequest(req, res)) {
    return;
  }

  let axios;
  await import('axios').then(importedAxios => {
    axios = importedAxios.default;
  });

  if (!axios) {
    return res.status(500).send('Axios is not initialized');
  }

  const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

  const { lat } = req.body || req.query;
  const { lon } = req.body || req.query;
  const { units = 'standard' } = req.body || req.query;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (response.status === 200) {
      const weatherInfo = {
        temperature: data.main.temp,
        weather: data.weather[0].description,
      };
      res.status(200).json(weatherInfo);
    } else {
      res.status(500).send('Could not fetch weather');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
};