import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../global/SearchBar'
import Header from '../global/Header'
import UseCurrentLocation from '../global/UseCurrentLocation'

const SearchLocator = () => {
  const weatherImage = useRef(null);
  const [isFocused, setIsFocused] = useState(null);
  const [geoError, setGeoError] = useState(false);

  const handleWeatherImageFocus = () => {
    setIsFocused(true);
  
  }

  const handleWeatherImageBlur = () => {
    setIsFocused(false);
  }

  const removeImageOnGeoError = () => {
    setIsFocused(true);
  }

  useEffect(() => {
    if (geoError) {
      removeImageOnGeoError();
    }
  },[geoError])


  return (
    <>
      <div className='absolute top-0 xl:hidden'>
        <Header backBtn={false} logo={true} shareBtn={false} />
      </div>
        <div className='flex flex-col justify-center gap-7 xl:justify-between items-center py-6 h-full w-[273px] xl:w-[273px] '>
          <div ref = {weatherImage} className= {`xl:hidden transition-all ease-out duration-300 ${ isFocused ? 'max-w-[0%] lg:max-w-[0%]' : 'max-w-[30%] lg:max-w-[40%]'}`}><img className='w-full' src='/weather-location-enabled.svg'/></div>
          <SearchBar onFocus = {handleWeatherImageFocus} onBlur = {handleWeatherImageBlur} />
          <div className='xl:hidden w-[65%]' ><img src='/divider.svg'/></div>
          <UseCurrentLocation removeImageOnGeoError={handleWeatherImageFocus}/>
        </div>
    </>
  )
}

export default SearchLocator