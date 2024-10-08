import React from 'react'
import Header from '../global/Header'
import WeatherCard from './WeatherCard'
import Recommendation from './Recommendation'
import StatusBar from './StatusBar'

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
          < StatusBar text = {text} title = {title} />
        </div>
            <div className='-mt-3 pb-12'> 
              <Recommendation /> 
            </div>
      </div>
    </>
  )
}

export default MainView;