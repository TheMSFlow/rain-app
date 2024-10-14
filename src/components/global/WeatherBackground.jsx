import React from 'react'

const WeatherBackground = ({ className, icons, heading, subheading, button }) => {
  return (
    <>
    <div className={`${className} bg-charcoal flex flex-col justify-center items-center z-0 relative`}>
            <div className='flex flex-row w-full'>
            <img className='w-[50%] object-cover' src='/cold.png'/>
            <img className='w-[50%] object-cover' src='/sunny.png'/>
            </div>
            <div className='flex flex-row'>
            <img className='w-[50%] object-cover' src='/cloudy-dark.png'/>
            <img className='w-[50%] object-cover' src='/clear-sky.png'/>
            </div>
            <div className='absolute flex flex-col gap-12 justify-center items-center px-4'>
                {icons}
                <div className='flex flex-col gap-3'>
                 <h1 className='text-center font-playfair text-5xl lg:text-8xl'>{heading}</h1>
                 {subheading}  
                </div>
                 <div>{button}</div>
            </div>
            
        </div>
    </>
  )
}

export default WeatherBackground