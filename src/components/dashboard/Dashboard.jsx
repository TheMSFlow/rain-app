import React from 'react'
import WeatherBackground from '../global/WeatherBackground'
import Header from '../global/Header'
import SearchLocator from './SearchLocator'

const Dashboard = () => {
  return (
    <>
    <div className='block xl:grid xl:grid-cols-[340px_1fr] grid-rows-1 gap-0 h-screen w-screen bg-charcoal'>
        <div className='relative'>
            {<div className='xl:hidden'><WeatherBackground /> </div>}
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center xl:bg-sidebar rounded-r-3xl'>
            <SearchLocator />
        </div>
         </div>
         <div className='hidden xl:block relative'>
            <Header backBtn={false} logo={true} shareBtn={false} />
            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/weather-location-disabled.svg" />
         </div>
    </div>
    
    </>
  )
}

export default Dashboard