import Helpers from './helpers';
import fetch from './fetch';
import CardHelpers from '../components/card/card';


(function () {
  const input = document.querySelector('#city');
  const button = document.querySelector('button');

  button.addEventListener('click', (e) => {
    if (input.value !== '') {
      Helpers.showLoader();
      fetch(input.value).then((data) => {
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
      e.preventDefault();
    }
  }, false);
}());
