const Helpers = (function() {
  'use strict';

  function convertUnixTime(unixTime) {
    // Create a new javascript Date object base on the timestamp
    // mutiplied by 100 so that the argument is in milliseconds
    let date  = new Date(unixTime * 1000);
    // Hours part of the timestamp
    let hours = date.getHours()
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return {
      hours: hours,
      formattedTime: formattedTime
    }
  }

  function hideLoader() {
    document.querySelector(".loader").style.display = "none"
    document.querySelector(".card").style.display = "block"
  }

  function showLoader() {
    document.querySelector(".loader").style.display = "block"
    document.querySelector(".card").style.display = "none"
  }

  return {
    convertUnixTime,
    hideLoader,
    showLoader
  }

}());

export default Helpers
