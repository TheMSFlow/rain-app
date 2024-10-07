import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import Button from './Button'

const UseCurrentLocation = () => {
    const { setWeatherData } = useWeather();
    const navigate = useNavigate();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        },
        (error) => {
            console.error('Error getting location:', error)
        }
    );
},[])

    const fetchWeather = (lat, lon) => {
        const key = '9ca9296066ca4ec01e96d51caa1593aa'
          const base = 'https://api.openweathermap.org/data/2.5/weather'
          const query =`?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
        
          if (lat && lon) {
            fetch(base + query)
            .then((response) => response.json())
            .then((weatherData) => {
              console.log('Weather Data:', weatherData);
              setWeatherData(weatherData);
              navigate('/result');
            })
            .catch((error) => console.error('Weather API Error:', error));
          } else {
            console.error('Latitude or Longitude is not available.')
          }
          
       };

  return (
    <Button onClick={() => fetchWeather(lat, lon)} className={'text-primary-dark bg-secondary'} icon = {<img src='/locator.svg'/>} text ='Use current location' />
  )
}

export default UseCurrentLocation