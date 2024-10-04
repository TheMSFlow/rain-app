import React from 'react'
import CityCountryPill from './CityCountryPill'

const WeatherCardMini = () => {
  return (
    <div className='relative z-10 flex flex-row self-start justify-center items-center gap-3'>
          <div className='flex flex-col gap-1'>
          <CityCountryPill />
          <p className='font-playfair text-white text-4xl'>Light rain</p>
        </div>
        <p className='font-playfair font-medium text-secondary text-8xl relative leading-[0.5]'>29 <span className='text-2xl absolute top-0 text-white'>°</span></p>
    </div>
  )
}

export default WeatherCardMini