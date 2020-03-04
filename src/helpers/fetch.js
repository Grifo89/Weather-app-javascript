
async function fetchingData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5//weather?q=${city}&units=metric&appid=${process.env.API_KEY}`, {mode: 'cors'})
      const data = await response.json()
      return data
  } catch (err) {
    console.log(err);
  }
}

export default fetchingData
