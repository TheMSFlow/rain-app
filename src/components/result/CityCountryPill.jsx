import React from 'react'
import { useWeather } from '../../Context/WeatherContext'

const CityCountryPill = () => {
  const { weatherData} = useWeather();
  return (
    <>
    <div className='flex flex-row justify-start items-center self-start gap-1 bg-primary font-onest text-xs text-white rounded-lg py-1 px-2'>
        <img src='/pin-location.svg' />
        <p>{weatherData.name}, {weatherData.sys.country}</p>
    </div>
    </>
  )
}

export default CityCountryPill