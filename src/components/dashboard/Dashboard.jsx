import React, { useEffect } from 'react'
import WeatherBackground from '../global/WeatherBackground'
import Header from '../global/Header'
import SearchLocator from './SearchLocator'

const Dashboard = () => {
  // All data saved in session storage is removed when the dashboard component mounts.
  useEffect(() => {
    sessionStorage.removeItem('weatherData');
    sessionStorage.removeItem('currentLocation');
  },[]);


  return (
    <>
    {/*main element displays block on mobile and tablet. On larger screens (xl and above) it displays 2 grid columns, 340px and 1fr.*/}
    <main className='block xl:grid xl:grid-cols-[340px_1fr] grid-rows-1 gap-0 max-h-[100svh] overflow-y-auto overflow-x-hidden w-screen bg-charcoal'>
        <div className='relative'>
            {<div className='xl:hidden'>
              <WeatherBackground 
              className={'min-h-screen w-full'}
              /> 
        </div>}
        <section className='absolute top-0 left-0 w-full h-full flex items-center justify-center xl:bg-sidebar rounded-r-3xl'>
            <SearchLocator />
        </section>
         </div>
         <section className='hidden xl:block relative'>
            <Header backBtn={false} logo={true} shareBtn={false} />
            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/weather-location-disabled.svg" />
         </section>
    </main>
    </>
  )
}

export default Dashboard