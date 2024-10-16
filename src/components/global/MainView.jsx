import React from 'react'
import Header from '../global/Header'
import WeatherCard from '../result/WeatherCard'
import StatusBar from '../result/StatusBar'
import Recommendations from '../result/Recommendations'

//MainView handles the full display on mobile and tablet. It also forms the 340px sidebar in Desktop
const MainView = ({ text, title, image }) => {
  return (
    <>
     <div className='w-full max-h-[100svh] overflow-y-auto flex flex-col gap-8 items-center justify-start xl:bg-sidebar rounded-r-3xl'>
        <div className='xl:hidden w-full mt-2 lg:mt-4 px-4'>
          <Header 
            backBtn={true} 
            logo={false} 
            shareBtn={false}/>
          </div>
        <WeatherCard image={image}/>
        <section className='xl:hidden'>
          < StatusBar text = {text} title = {title} />
        </section>
            <section className='-mt-3 pb-12'> 
              <Recommendations /> 
            </section>
      </div>
    </>
  )
}

export default MainView;