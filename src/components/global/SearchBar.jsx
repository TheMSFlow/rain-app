import React, { useState, useRef } from 'react'
import searchCity from '../../API/SearchCity'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import fetchWeather from '../../API/FetchWeather'

const SearchBar = ({onFocus, onBlur, inputRef}) => {
 const [list, setList] = useState([])
 const [city, setCity] = useState('')
 const [error, setError] = useState(null)
 const { setWeatherData } = useWeather();
 const navigate = useNavigate();

 const cityForm = useRef(null);
 const searchCityTimer = useRef(null);

 //1 second after every change in the input, the searchCity API is run
 const handleChange = (e) => {
  const city = e.target.value.trim();
    setCity(city)

    if (searchCityTimer.current) {
      clearTimeout(searchCityTimer.current);
    }

    searchCityTimer.current = setTimeout(() => {
      if (city === '') {
        setList([]);
        setError(null);
      } else {
        searchCity(city, setList, setError);
      }
      if(list.length > 0) {
        setError(null);
      }
    },500);

    return () => clearTimeout(searchCityTimer.current);
 }

 //fetches the weather data of any list item
 const handleFetchWeather = (lat, lon) => {
   fetchWeather(lat, lon, setWeatherData, setError);
   if(!error) {
      navigate('/result');
   }
 
 };

 const handleSubmit = (e) => {
   e.preventDefault();
 }

 const handleSearchError = () => {
  setError(null);
  cityForm.current.reset();
  inputRef.current.focus();
  list.length = 0;
 }

  
  return (
    <>
    <div className='flex flex-col gap-0 justify-center items-center w-full'>
        <form ref={cityForm} onSubmit = {handleSubmit} className='bg-white flex flex-row gap-2 items-center justify-start rounded-3xl py-2 pl-4 w-full'>
        <img src='/search.svg' />
        <input className='placeholder-primary text-primary-dark focus:outline-none text-base w-full mr-1 bg-transparent border-none appearance-none ' type='text' 
        name='search' 
        placeholder='Search for a city or local'
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        />
        </form>
        {list.length > 0 && (
          <div className='flex flex-col gap-0 w-[273px] mt-2 max-h-[120px] overflow-y-auto xl:h-auto xl:overflow-y-hidden'>
            {list.map((place,index) => (
              <div onClick={() => handleFetchWeather(place.lat, place.lon)} key={index} className='block w-full text-white py-2 border-[#1e1e1e] border-b-[1px] cursor-pointer'>
                {place.name}, {place.state}, {place.country}
              </div>
            ))}
          </div>
        )}
        {error && <div className='text-accent text-xs flex flex-col gap-1 justify-center items-center pt-4'>
          {error}
          <button onClick={handleSearchError} className='underline hover:text-secondary'>Try again?</button>
          </div>
          }
    </div>
    </>
  )
}

export default SearchBar