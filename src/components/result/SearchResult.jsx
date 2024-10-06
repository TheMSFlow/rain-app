import React, { useEffect } from 'react'
import Header from '../global/Header'
import ResultSummary from './ResultSummary'
import StatusBar from './StatusBar'



const SearchResult = () => {

  return (
    <>
     <div className='block xl:grid xl:grid-cols-[340px_1fr] grid-rows-1 gap-0 h-full w-full xl:min-h-screen bg-charcoal'>
       <ResultSummary />
         <div className='hidden xl:block relative'>
            <Header backBtn={true} logo={true} shareBtn={true} />
            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="" />
            <div className='w-[300px] h-[300px] rounded-[20px] border-transparent shadow-[0px_20px_40px_#0000001a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.2))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 -mt-11'><img className='w-[300px] lg:bg-cover' src='./src/assets/images/waterproof-poncho.png'  /></div>
            <div className='absolute bottom-12'><StatusBar /></div>
         </div>
         
         
    </div>
    </>
  )
}

export default SearchResult