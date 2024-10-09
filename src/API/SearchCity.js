const searchCity = (city, setList, setError) => {
  const key = import.meta.env.VITE_RAIN_API_KEY;
    const base = 'http://api.openweathermap.org/geo/1.0/direct'
    const query = `?q=${city}&limit=5&appid=${key}`
  
  
    fetch(base + query)
      .then((response) => response.json())
      .then((result) => 
        {
        if(result.length === 0) {
          throw new Error("Not sure you entered the correct city name")
        } 
        setList(result)
        })
      .catch((error) => setError(error.message));
  }

  export default searchCity;