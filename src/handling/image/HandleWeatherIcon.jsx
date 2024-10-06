import React from 'react'
import { useWeather } from '../../Context/WeatherContext'

const HandleWeatherIcon = () => {
    const { weatherData} = useWeather();
    const weatherIcons = {
        '01d': './src/assets/weather-icons/2d/01d.png',
        '01n': './src/assets/weather-icons/2d/01n.png',
        '02d': './src/assets/weather-icons/2d/02d.png',
        '02n': './src/assets/weather-icons/2d/02n.png',
        '03d': './src/assets/weather-icons/2d/03d.png',
        '03n': './src/assets/weather-icons/2d/03d.png',
        '04d': './src/assets/weather-icons/2d/04n.png',
        '04n': './src/assets/weather-icons/2d/04n.png',
        '09d': './src/assets/weather-icons/2d/09d.png',
        '09n': './src/assets/weather-icons/2d/09d.png',
        '10d': './src/assets/weather-icons/2d/10d.png',
        '10n': './src/assets/weather-icons/2d/10n.png',
        '11d': './src/assets/weather-icons/2d/11n.png',
        '11n': './src/assets/weather-icons/2d/11n.png',
        '13d': './src/assets/weather-icons/2d/13d.png',
        '13n': './src/assets/weather-icons/2d/13d.png',
        '50d': './src/assets/weather-icons/2d/50n.png',
        '50n': './src/assets/weather-icons/2d/50n.png',
      };
    
      const weatherIconCode = weatherData?.weather[0]?.icon;
      const weatherIconSrc = weatherIcons[weatherIconCode];
  return (
    <img className='absolute xl:absolute xl:top-20 xl:-left-12 xl:translate-x-0 xl:translate-y-0 xl:ml-0 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[-120px] lg:ml-[-200px] mt-[20px]' src={weatherIconSrc} />
  )
}

export default HandleWeatherIcon