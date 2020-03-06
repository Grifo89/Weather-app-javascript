import Helpers from '../../helpers/helpers';

const CardHelpers = (function a() {
  function iconSrc(sunRise, description) {
    let src = './icons/cloudy.svg';
    if (sunRise) {
      if (description.includes('clear')) {
        src = './icons/day.svg';
      } else if (description.includes('drizzel')) {
        src = './icons/rainy-day.svg';
      } else if (description.includes('rain')) {
        src = './icons/rainy-day.svg';
      } else if (description.includes('thunderstorm')) {
        src = './icons/thunder.svg';
      } else if (description.includes('snow')) {
        src = './icons/snow.svg';
      } else if (description.includes('clouds')) {
        src = './icons/cloudy-day.svg';
      }
    } else if (description.includes('clear')) {
      src = './icons/night.svg';
    } else if (description.includes('drizzel')) {
      src = './icons/rainy-night.svg';
    } else if (description.includes('rain')) {
      src = './icons/rainy-night.svg';
    } else if (description.includes('thunderstorm')) {
      src = './icons/thunder.svg';
    } else if (description.includes('snow')) {
      src = './icons/snow.svg';
    } else if (description.includes('clouds')) {
      src = './icons/cloudy-night.svg';
    }
    return src;
  }

  function isSunrise(sunriseStamp, sunsetStamp) {
    const currentHour = new Date().getHours();
    return !!(Helpers.convertUnixTime(sunriseStamp).hours <= currentHour
      && currentHour < Helpers.convertUnixTime(sunsetStamp));
  }

  function append(object) {
    const country = document.querySelector('.country');
    const city = document.querySelector('.city');
    const temp = document.querySelector('.main h1');
    const icon = document.querySelector('.main img');
    const description = document.querySelector('.label');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.pressure');
    const wind = document.querySelector('.wind');

    country.textContent = object.country;
    city.textContent = object.city;
    temp.textContent = `${object.temp}°C`;
    description.textContent = `Description: ${object.description}`;
    humidity.textContent = `${object.humidity}%`;
    pressure.textContent = `${object.pressure} hPa`;
    wind.textContent = `${object.windSpeed} m/s`;

    const sunrise = isSunrise(object.sunrise, object.sunset);

    icon.src = iconSrc(sunrise, object.description);
  }

  return {
    iconSrc,
    isSunrise,
    append,
  };
}());


export default CardHelpers;
