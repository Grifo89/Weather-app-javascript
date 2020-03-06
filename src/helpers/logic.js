import Helpers from './helpers';
import fetch from './fetch';
import CardHelpers from '../components/card/card';


(function c() {
  const input = document.querySelector('#city');
  const button = document.querySelector('button');
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');
  let city = '';

  function fetchData(value, metric) {
    Helpers.showLoader();
    fetch(value, metric).then((data) => {
      input.value = '';
      Helpers.hideLoader();
      const processData = {
        country: data.sys.country,
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sunset: data.sys.sunset,
        sunrise: data.sys.sunrise,
        windSpeed: data.wind.speed,
      };
      CardHelpers.append(processData);
    });
  }

  button.addEventListener('click', (e) => {
    if (input.value !== '') {
      fetchData(input.value, 'metric');
      city = input.value;
      e.preventDefault();
    }
  }, false);

  celsius.addEventListener('click', (e) => {
    if (city !== '') {
      fetchData(city, 'metric');
      e.preventDefault();
    }
  }, false);

  fahrenheit.addEventListener('click', (e) => {
    if (city !== '') {
      fetchData(city, 'imperial');
      e.preventDefault();
    }
  }, false);
}());
