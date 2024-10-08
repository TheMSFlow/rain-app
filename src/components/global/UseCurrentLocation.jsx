import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import Button from './Button'

const UseCurrentLocation = () => {
    const { setWeatherData } = useWeather();
    const navigate = useNavigate();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [error, setError] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        },
        (error) => {
            setError(error)
        }
    );
},[])

    const fetchWeather = (lat, lon) => {
        const key = '9ca9296066ca4ec01e96d51caa1593aa'
          const base = 'https://api.openweathermap.org/data/2.5/weather'
          const query =`?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
        
          if (lat && lon) {
            fetch(base + query)
            .then((response) => 
              response.json())
            .then((weatherData) => {
              setWeatherData(weatherData);
              navigate('/result');
            })
            .catch((error) => setError(error));
          } else {
            setError('Getting your location...')
          }
          
       };


  return (
    <>
      {error && <div className='text-accent text-xs flex flex-col gap-1 justify-center items-center mb-4'>
          {error}
          <button onClick={() => setError(null)} className='underline'>Try again</button>
          </div>
          }
      <Button onClick={() => fetchWeather(lat, lon)} className={'text-primary-dark bg-secondary'} icon = {<img src='/locator.svg'/>} text ='Use current location' />
      
    </>

)}

export default UseCurrentLocation