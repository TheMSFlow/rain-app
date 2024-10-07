import React from 'react'
import Header from '../global/Header'

const DesktopView = ({ text, title, image }) => {
  return (
    <>
        <div className='hidden relative xl:flex xl:flex-col xl:justify-between xl:items-center xl:w-full'>
            <div><Header backBtn={true} logo={true} shareBtn={true} /></div>
            <div className='w-[300px] h-[300px] rounded-[20px] border-transparent shadow-[0px_20px_40px_#0000001a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.2))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] '><img className='w-[300px] lg:bg-cover' src={`./src/assets/images/${image}`} /></div>
            <div className=''>
                <div className='flex flex-col gap-0 justify-center items-start w-screen'>
                    <div className='bg-accent text-xs py-[6px] px-[10px] rounded-[4px_4px_0px_0px] ml-6'>
                        {title || "No weather info"}
                    </div>
                <p className='bg-secondary text-xs px-6 py-[10px] w-full'>{text || "No accessory recommendation."}</p>
                </div>
            </div>
         </div>
    </>
  )
}

export default DesktopView