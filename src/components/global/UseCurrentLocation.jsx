import React, { useState , useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import Button from './Button'

const UseCurrentLocation = ({removeImageOnGeoError, inputRef}) => {
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
        // If there is a geoError, run the removeImageOnGeoError function. It's passed as a prop to be handled in the SearchLocator component. This is a UI fix to manage screen real estate on mobile and tablet.
        removeImageOnGeoError();
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
              console.log(`Current Location just logged: ${JSON.stringify(weatherData)}`)
              navigate('/result');
            })
            .catch((error) => setError(error.message));
          } else {
            setError('Location not found')
          }
          
       };

       const handleReloadPage = () => {
        window.location.reload();
      };

      const handleInputFocus = () => {
        inputRef.current.focus()
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
            onClick={handleReloadPage} 
            className= {'bg-secondary text-primary-dark hover:bg-primary-dark hover:text-white'}
            text= 'Reload page'
            />
            <Button 
            onClick={handleInputFocus} 
            className= {'bg-transparent text-secondary border hover:text-white'}
            text= 'Search manually'
            />
          </div>
        </div>
      }
      <Button 
      onClick={findLocation} 
      className={'text-primary-dark bg-secondary hover:text-white hover:bg-primary-dark'} 
      icon = {<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6.36364C7.99091 6.36364 6.36364 7.99091 6.36364 10C6.36364 12.0091 7.99091 13.6364 10 13.6364C12.0091 13.6364 13.6364 12.0091 13.6364 10C13.6364 7.99091 12.0091 6.36364 10 6.36364ZM18.1273 9.09091C17.7091 5.3 14.7 2.29091 10.9091 1.87273V0H9.09091V1.87273C5.3 2.29091 2.29091 5.3 1.87273 9.09091H0V10.9091H1.87273C2.29091 14.7 5.3 17.7091 9.09091 18.1273V20H10.9091V18.1273C14.7 17.7091 17.7091 14.7 18.1273 10.9091H20V9.09091H18.1273ZM10 16.3636C6.48182 16.3636 3.63636 13.5182 3.63636 10C3.63636 6.48182 6.48182 3.63636 10 3.63636C13.5182 3.63636 16.3636 6.48182 16.3636 10C16.3636 13.5182 13.5182 16.3636 10 16.3636Z" fill="currentColor"/>
        </svg>} 
      text ='Use current location' 
      />
      
    </>

)}

export default UseCurrentLocation