const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/weather', async (req, res) => {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.137154&longitude=11.576124&hourly=temperature_2m');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});