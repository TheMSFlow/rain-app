import React, { useState } from 'react'
import searchCity from '../../API/searchCity'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../Context/WeatherContext'

const SearchBar = () => {
 const [list, setList] = useState([])
 const [city, setCity] = useState('')
 const { setWeatherData } = useWeather();
 const navigate = useNavigate();


 const fetchWeather = (lat, lon) => {
  const key = '9ca9296066ca4ec01e96d51caa1593aa'
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query =`?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
  
    fetch(base + query)
      .then((response) => response.json())
      .then((weatherData) => {
        console.log('Weather Data:', weatherData);
        setWeatherData(weatherData);
        navigate('/result');
      })
      .catch((error) => console.error('Weather API Error:', error));
 };


 const handleChange = (e) => {
    setCity(e.target.value)
    console.log(city);
    searchCity(e.target.value, setList);
 }

 const handleSubmit = (e) => {
   e.preventDefault();
 }

  
  return (
    <>
    <div className='flex flex-col gap-0 justify-center items-center w-full'>
        <form onSubmit = {handleSubmit} className='bg-white flex flex-row gap-2 items-center justify-start rounded-3xl py-2 pl-4 w-full'>
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
              <div onClick={() => fetchWeather(place.lat, place.lon)} key={index} className='block w-full text-white py-2 border-[#1e1e1e] border-b-[1px] cursor-pointer'>
                {place.name}, {place.state}, {place.country}
              </div>
            ))}
          </div>
        )}
    </div>
    </>
  )
}

export default SearchBar