import React, { useRef, useState } from 'react'
import SearchBar from '../global/SearchBar'
import Header from '../global/Header'
import UseCurrentLocation from '../global/UseCurrentLocation'

//This component houses the Search input and UseCurrentLocation button
const SearchLocator = () => {
  const [isFocused, setIsFocused] = useState(null);
  const inputRef = useRef(null);

  const handleWeatherImageFocus = () => {
    setTimeout(() => {
      setIsFocused(true);
    }, 200);
  }

  const handleWeatherImageBlur = () => {
    const weatherImageTimerBlur = setTimeout(() => {
        setIsFocused(false);
    },200);

    return () => clearTimeout(weatherImageTimerBlur);
  }


  return (
    <>
      <div className='absolute top-0 xl:hidden'>
        <Header backBtn={false} logo={true} shareBtn={false} />
      </div>
        <div className='flex flex-col justify-center gap-7 xl:justify-between items-center py-6 h-full w-[273px] xl:w-[273px] '>
          {/* UI fix to manage screen real estate on mobile and tablet: When the search input in in focus, the weather image dissapears to manage space and avoid page scrolling in the dashboard. */}
          <div className= {`xl:hidden transition-all ease-out duration-300 ${ isFocused ? 'max-w-[0%] lg:max-w-[0%]' : 'max-w-[30%] lg:max-w-[40%]'}`}><img className='w-full' src='/weather-location-enabled.svg'/></div>
          <SearchBar inputRef={inputRef} onFocus = {handleWeatherImageFocus} onBlur = {handleWeatherImageBlur} />
          <div className='xl:hidden w-[65%]' ><img src='/divider.svg'/></div>
          {/* Same UI fix is applied when there is a geoError */}
          <UseCurrentLocation inputRef={inputRef} removeImageOnGeoError={handleWeatherImageFocus}/>
        </div>
    </>
  )
}

export default SearchLocator