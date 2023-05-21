const form = document.querySelector('form');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const forecast = data.forecast.forecastday;
    let forecastHtml = '';

    forecast.forEach((day) => {
      const date = day.date;
      const { maxtemp_c, cloud, mintemp_c, condition } = day.day;
      forecastHtml += `
        <div>
          <h3>${date}</h3>
          <p>High: ${maxtemp_c}°C</p>
          <p>Cloud: ${cloud}</p>
          <p>Low: ${mintemp_c}°C</p>
          <p>Condition: ${condition.text}</p>
        </div>
      `;
    });

    weatherInfo.innerHTML = forecastHtml;
  } catch (error) {
    console.error(error);
    weatherInfo.innerHTML = '<p>Unable to get weather information</p>';
  }
});