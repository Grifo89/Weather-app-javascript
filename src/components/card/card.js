function iconSrc(sunRise) {
  let src = ''
  if(sunRise){
    switch (description) {
      case description.match(/clear/g):
        src = './icons/day.svg'
        break;
      case description.match(/[rain|drizzel]/g):
        src = './icons/rainy-day.svg';
        break;
      case description.match(/thunderstorm/g):
        src = './icons/thunder.svg';
        break;
      default:

    }
  }
}
