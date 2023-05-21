const form = document.querySelector('form');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;
  const apiKey = '9dca074d193147da86f110430232105';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const { temp_c, cloud, humidity, wind_kph } = data.current;
    weatherInfo.innerHTML = `
      <p>Temperature: ${temp_c}°C</p>
      <p>Cloud: ${cloud}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${wind_kph} kph</p>
    `;
  } catch (error) {
    console.error(error);
    weatherInfo.innerHTML = '<p>Unable to get weather information</p>';
  }
});