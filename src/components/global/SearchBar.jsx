import React, { useState, useRef } from 'react'
import searchCity from '../../API/SearchCity'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'
import fetchWeather from '../../API/FetchWeather'

const SearchBar = () => {
 const [list, setList] = useState([])
 const [city, setCity] = useState('')
 const [error, setError] = useState(null)
 const { setWeatherData } = useWeather();
 const navigate = useNavigate();

 const cityForm = useRef(null);

 const handleChange = (e) => {
    setCity(e.target.value)
    searchCity(e.target.value, setList, setError);
    if (e.target.value === '') {
      list.length = 0;
      setError(null)
    } 

    if (list.length > 0) {
      setError(null)
    }

 }

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
  list.length = 0;
 }

  
  return (
    <>
    <div className='flex flex-col gap-0 justify-center items-center w-full'>
        <form ref={cityForm} onSubmit = {handleSubmit} className='bg-white flex flex-row gap-2 items-center justify-start rounded-3xl py-2 pl-4 w-full'>
        <img src='/search.svg' />
        <input className='placeholder-primary text-primary-dark outline-none text-sm w-[90%]' type='text' 
        name='search' 
        placeholder='Search for a city or local'
        onChange={handleChange}
        />
        </form>
        {list.length > 0 && (
          <div className='flex flex-col gap-0 w-full mt-2'>
            {list.map((place,index) => (
              <div onClick={() => handleFetchWeather(place.lat, place.lon)} key={index} className='block w-full text-white py-2 border-[#1e1e1e] border-b-[1px] cursor-pointer'>
                {place.name}, {place.state}, {place.country}
              </div>
            ))}
          </div>
        )}
        {error && <div className='text-accent text-xs flex flex-col gap-1 justify-center items-center mt-4'>
          {error}
          <button onClick={handleSearchError} className='underline'>Try again?</button>
          </div>
          }
    </div>
    </>
  )
}

export default SearchBar