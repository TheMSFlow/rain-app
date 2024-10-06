import React from 'react'
import { useWeather } from '../../Context/WeatherContext'

const HandleWeatherBackground = () => {
    const { weatherData} = useWeather();
    const weatherBackgrounds = {
        '01d': './sunny.png',
        '01n': './cloudy-dark.png',
        '02d': './clear-sky.png',
        '02n': './cloudy-dark.png',
        '03d': './cloudy-dark.png',
        '03n': './cloudy-dark.png',
        '04d': './cloudy-dark.png',
        '04n': './cloudy-dark.png',
        '09d': './cold.png',
        '09n': './cold.png',
        '10d': './cold.png',
        '10n': './cold.png',
        '11d': './cloudy-dark.png',
        '11n': './cloudy-dark.png',
        '13d': './cold.png',
        '13n': './cold.png',
        '50d': './cloudy-dark.png',
        '50n': './cloudy-dark.png',
      };
    
      const weatherIconCode = weatherData?.weather[0]?.icon;
      const weatherBackgroundSrc = weatherBackgrounds[weatherIconCode];
  return (
    <img  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={weatherBackgroundSrc} />
  )
}

export default HandleWeatherBackground