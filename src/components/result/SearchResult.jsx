import React, { useEffect, useState } from 'react'
import UseWeatherMain from '../../handling/weather/main/UseWeatherMain'
import UseWeatherDesktop from '../../handling/weather/main/UseWeatherDesktop'
import { useWeather } from '../../Context/WeatherContext'
import fetchWeather from '../../API/FetchWeather'
import { useNavigate } from 'react-router-dom'

const SearchResult = () => {
  const { weatherData, setWeatherData } = useWeather();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearchError = () => {
    navigate('/dashboard');
  }

  useEffect(() => {
    const lastSavedSearch = sessionStorage.getItem('weatherData') 
    const lastSavedLocation = sessionStorage.getItem('currentLocation')

    const fetchRealTimeWeather = () => {
      if(lastSavedLocation) {
        const location = JSON.parse(lastSavedLocation);
        const lat = location.lat;
        const lon = location.lon;
  
        navigator.geolocation.getCurrentPosition(
          (position) => {
          const currentLat = position.coords.latitude;
          const currentLon = position.coords.longitude;

          if(lat !== currentLat || lon !== currentLon) {
            sessionStorage.setItem('currentLocation', JSON.stringify({lat: currentLat, lon: currentLon}))
            fetchWeather(currentLat, currentLon, setWeatherData, (error) => {
              if (error) {
                setError(`Error fetching weather for current location: ${error.message}`);
              }
            });
          }
      },
      (geoError) => {
        setError(`Geolocation error: ${geoError}`)
      }
    );
    } else if(lastSavedSearch) {
        const savedSearch = JSON.parse(lastSavedSearch);
        const lat = savedSearch.coord.lat;
        const lon = savedSearch.coord.lon;
  
        fetchWeather(lat, lon, setWeatherData, (error) => {
          if (error) {
            setError(`Error fetching real-time weather data: ${error.message}`);
          }
        });
      };
    };

      fetchRealTimeWeather();
      const refreshWeather = setInterval(fetchRealTimeWeather, 300000);

      return () => clearInterval(refreshWeather);
    },[setWeatherData]);

 

  return (
    <>
    { error && <div className='absolute w-[300px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-charcoal text-accent flex flex-col gap-1 justify-center items-center py-4 px-2'>
      {error}
      <button onClick={handleSearchError} className='underline'>
        Go back to dashboard
        </button>
    </div> }
     <section className='block xl:grid xl:grid-cols-[340px_minmax(0,1fr)] grid-rows-1 gap-0 w-full min-h-screen bg-charcoal'>
      {/* Rendered by MainView, display block on mobile and tablet. On desktop it forms the first part of the grid */}
       <UseWeatherMain />
       {/* Rendered by DesktopView, hidden on mobile and tablet. On desktop it forms the second part of the grid */}
      <UseWeatherDesktop />
    </section>
    </>
  )
}

export default SearchResult