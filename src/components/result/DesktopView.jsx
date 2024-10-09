import React from 'react'
import Header from '../global/Header'
import StatusBar from './StatusBar'

const DesktopView = ({ text, title, image }) => {
  return (
    <>
        <div className='hidden xl:block xl:h-full relative'>
            <div><Header backBtn={true} logo={true} shareBtn={false} /></div>
            <div className='w-[300px] h-[300px] rounded-[20px] border-transparent shadow-[0px_20px_40px_#0000001a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.2))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 -mt-12'>
              <img className='w-[300px] lg:bg-cover' src={`./src/assets/images/${image}`} />
            </div>
            <div className='absolute bottom-12'>
                <StatusBar text = {text} title = {title} />
            </div>
         </div>
    </>
  )
}

export default DesktopView