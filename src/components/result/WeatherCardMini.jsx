import React from 'react'
import CityCountryPill from './CityCountryPill'
import { useWeather } from '../../Context/WeatherContext'

//displays city and country from CityCountryPill + weather description and main temp 
const WeatherCardMini = () => {
  const { weatherData } = useWeather();
  return (
    <div className='relative z-10 flex flex-row self-start justify-center items-center gap-3'>
          <div className='flex flex-col gap-1'>
          <CityCountryPill />
          <p className='font-playfair text-white text-3xl'>{weatherData.weather[0].description}</p>
        </div>
        <p className='font-playfair font-medium text-secondary text-7xl relative leading-[0.5] mt-[4px]'>
          {Math.round(weatherData.main.temp)} <span className='text-2xl absolute -top-1 text-white'>°</span></p>
    </div>
  )
}

export default WeatherCardMini