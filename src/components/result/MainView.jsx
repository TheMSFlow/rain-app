import React from 'react'
import Header from '../global/Header'
import WeatherCard from './WeatherCard'
import Recommendation from './Recommendation'

const MainView = ({ text, title, image }) => {
  return (
    <>
     <div className='w-full h-full flex flex-col gap-8 items-center justify-start xl:bg-sidebar  rounded-r-3xl'>
        <div className='xl:hidden w-full mt-2 lg:mt-4 px-4'>
          <Header 
            backBtn={true} 
            logo={false} 
            shareBtn={true}/>
          </div>
        <WeatherCard image={image}/>
        <div className='xl:hidden'>
          <div className='flex flex-col gap-0 justify-center items-start w-screen'>
            <div className='bg-accent text-xs py-[6px] px-[10px] rounded-[4px_4px_0px_0px] ml-6'>
              {title || "No weather info"}
            </div>
            <p className='bg-secondary text-xs px-6 py-[10px] w-full'>{text || "No accessory recommendation."}</p>
          </div>
        </div>
            <div className='-mt-3'> 
              <Recommendation /> 
            </div>
      </div>
    </>
  )
}

export default MainView;