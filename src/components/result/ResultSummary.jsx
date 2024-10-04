import React from 'react'
import Header from '../global/Header'
import WeatherCard from './WeatherCard'
import StatusBar from './StatusBar'
import Recommendation from './Recommendation'

const ResultSummary = () => {
  return (
    <>
     <div className='w-full h-full flex flex-col gap-8 items-center justify-start xl:bg-sidebar  rounded-r-3xl'>
            <div className='xl:hidden w-full mt-2 lg:mt-4 px-4'><Header backBtn={true} logo={false} shareBtn={true}/></div>
            <WeatherCard />
            <div className='xl:hidden'><StatusBar /></div>
            <div className='-mt-3'> <Recommendation /> </div>
        </div>
    </>
  )
}

export default ResultSummary