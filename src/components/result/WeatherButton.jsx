import React from 'react'

const WeatherButton = ({ icon, main, description, value, onClick }) => {
  return (
    <>
        <button onClick = {onClick} className='flex flex-row h-[40px] sm:h-24 sm:w-36 xl:h-[40px] xl:w-auto sm:justify-between sm:items-start items-center xl:items-center justify-center xl:justify-center px-0 py-[5px] relative bg-white rounded-lg [background:linear-gradient(180deg,rgb(43.35,42.99,42.99)_0%,rgb(107.95,107.95,107.95)_100%)] w-full'>
            <div>{icon}</div>
            <p className='hidden sm:block sm:pr-2 sm:pt-2 text-white font-light xl:hidden'> {value} </p>
            <p className='text-white font-onest text-xs font-light sm:font-light sm:absolute sm:bottom-3 sm:left-2 xl:static xl:bottom-auto xl:left-auto'>{main} <span className='font-light inline-flex xl:inline-flex sm:hidden lg:hidden'>{description}</span></p>
        </button>
        
    </>
  )
}

export default WeatherButton