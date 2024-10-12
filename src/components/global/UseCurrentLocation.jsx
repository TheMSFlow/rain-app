import React, { useState , useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import Button from './Button'
import SearchBar from './SearchBar'

const UseCurrentLocation = () => {
    const { setWeatherData } = useWeather();
    const navigate = useNavigate();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [error, setError] = useState(null)
    const [geoError, setGeoError] = useState(null);
    const [loading, setLoading] = useState(null);

    const findLocation = () => {
      setLoading('Getting your location...')
      setGeoError(null);
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setGeoError(null);
        setLoading('Fetching weather details...')
        fetchWeather(latitude,longitude);
    },
    (geoError) => {
      setLoading(null);
        setGeoError('Location access denied. To use location please enable it in your browser settings and reload the page.')
    }
  );
};     


    const fetchWeather = (lat, lon) => {
          const key = import.meta.env.VITE_RAIN_API_KEY;
          const base = 'https://api.openweathermap.org/data/2.5/weather'
          const query =`?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
        
          if (lat && lon) {
            fetch(base + query)
            .then((response) => 
              response.json())
            .then((weatherData) => {
              setWeatherData(weatherData);
              sessionStorage.setItem('currentLocation', JSON.stringify(weatherData));
              navigate('/result');
            })
            .catch((error) => setError(error.message));
          } else {
            setError('Location not found')
          }
          
       };

       const handleGeoError = () => {
        window.location.reload();
      };

      const handleInputFocus = () => {
        setGeoError(null);
      }

  return (
    <>
      {loading && 
        <div className='text-secondary text-xs flex flex-col gap-1 justify-center items-center mb-4'>
        {loading}
        </div>
      }
      {error && <div className='text-accent text-xs flex flex-col gap-1 justify-center items-center mb-4'>
          {error}
          <button onClick={() => setError(null)} className='underline'>Try again</button>
          </div>
          }

      {geoError && 
        <div className='text-accent text-xs text-center flex flex-col gap-1 justify-center items-center mb-4'>
          {geoError}
          <div className='flex flex-col gap-4 justify-center items-center mt-4'>
            <Button 
            onClick={handleGeoError} 
            className= {'bg-primary text-white'}
            text= 'Reload page'
            />
            <Button 
            onClick={handleInputFocus} 
            className= {'bg-transparent text-secondary border border-solid border-secondary'}
            text= 'Search manually'
            />
          </div>
        </div>
      }
      <Button 
      onClick={findLocation} 
      className={'text-primary-dark bg-secondary'} 
      icon = {<img src='/locator.svg'/>} 
      text ='Use current location' 
      />
      
    </>

)}

export default UseCurrentLocation