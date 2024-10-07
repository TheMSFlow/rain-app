import React from 'react'
import WeatherCardMini from './WeatherCardMini'
import { useWeather } from '../../Context/WeatherContext'
import HandleWeatherIcon from '../../handling/image/HandleWeatherIcon'
import HandleWeatherBackground from '../../handling/image/HandleWeatherBackground'

const WeatherCard = ({image}) => {
  const { weatherData} = useWeather();
 
  return (
    <>
    <div className='relative h-auto w-full px-4 xl:pt-6'>
        <HandleWeatherBackground />
        <HandleWeatherIcon />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='lg:hidden xl:block'><WeatherCardMini /></div>
        <div className='w-[200px] h-[200px] lg:h-[300px] lg:w-[300px] xl:h-[200px] xl:w-[200px] rounded-[20px] border-transparent shadow-[0px_20px_40px_#0000001a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.2))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)]'>
          <img className='lg:w-[300px] xl:w-[200px] lg:bg-cover' src={`./src/assets/images/${image}`}  />
        </div>
       </div>
        <div className='mt-6 hidden sm:hidden lg:block xl:hidden'><WeatherCardMini /></div>
    </div>
    </>
  )
}
 
export default WeatherCard