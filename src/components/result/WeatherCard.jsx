import React from 'react'
import CityCountryPill from './CityCountryPill'
import WeatherCardMini from './WeatherCardMini'

const WeatherCard = () => {
  return (
    <>
    <div className='relative h-auto w-full px-4 xl:pt-6'>
    <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src='/cold.png' />
    <img className='absolute xl:absolute xl:top-20 xl:-left-6 xl:translate-x-0 xl:translate-y-0 xl:ml-0 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[-120px] lg:ml-[-200px] mt-[20px]' src='./src/assets/weather-icons/2d/10d.png'/>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='lg:hidden xl:block'><WeatherCardMini /></div>
        <div className='w-[200px] h-[200px] lg:h-[300px] lg:w-[300px] xl:h-[200px] xl:w-[200px] rounded-[20px] border-transparent shadow-[0px_20px_40px_#0000001a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.2))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)]'>
          <img className='lg:w-[300px] xl:w-[200px] lg:bg-cover' src='./src/assets/images/waterproof-poncho.png'  />
        </div>
       </div>
        <div className='mt-6 hidden sm:hidden lg:block xl:hidden'><WeatherCardMini /></div>
    </div>
    </>
  )
}
 
export default WeatherCard