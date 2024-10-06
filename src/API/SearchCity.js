const searchCity = (city, setList) => {
    const key = '9ca9296066ca4ec01e96d51caa1593aa'
    const base = 'http://api.openweathermap.org/geo/1.0/direct'
    const query = `?q=${city}&limit=5&appid=${key}`
  
  
    fetch(base + query)
      .then((response) => response.json())
      .then((result) => 
        {
        console.log(result)
        setList(result)
        })
      .catch((error) => console.error(error));
  }

  export default searchCity;