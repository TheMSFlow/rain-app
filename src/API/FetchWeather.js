const fetchWeather = (lat, lon, setWeatherData, setError) => {
    const key = import.meta.env.VITE_RAIN_API_KEY;
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query =`?lat=${lat}&lon=${lon}&units=metric&appid=${key}`

    
      if (lat && lon) {
        fetch(base + query)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Couldn't reach the data at this time")
            }
        return response.json();})
        .then((weatherData) => {
          setWeatherData(weatherData);
          sessionStorage.setItem('weatherData', JSON.stringify(weatherData));
          setError(null);
        })
        .catch((error) => setError(error.message));
      } else {
        setError('Latitude or Longitude is not available.')
      }
      
   };

   export default fetchWeather;