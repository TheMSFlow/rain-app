import React from 'react'
import WeatherButton from './WeatherButton'
import Button from '../global/Button'

const Recommendation = () => {
  return (
    <>
        <div className='flex flex-col gap-1 justify-center items-center'>
            <div className='flex flex-col gap-4'>
            <p className='text-white text-xs text-center'>Click any weather info to see recommendations.</p>
            <div className='flex flex-col gap-2 xl:flex xl:flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2'>
                <WeatherButton main = 'Rain' description='light rain' value={null} icon = {<img src='./src/assets/weather-icons/flat/10d.svg'/>}/>
                <WeatherButton main = 'Temperature' description='29°c' value='29°c' icon = {<img src='./src/assets/weather-icons/flat/temp.svg'/>} />
                <WeatherButton main = 'Wind' description='3.5' value='3.5' icon = {<img src='./src/assets/weather-icons/flat/wind.svg'/>} />
                <WeatherButton main = 'Humidity' description='74%' value='74%' icon = {<img src='./src/assets/weather-icons/flat/humidity.svg'/>} />
            </div>
            </div>
            <div>
            <Button className={'text-secondary bg-transparent underline text-sm font-light'} text = 'View all recommendations'/>
            </div>
        </div>
    </>
  )
}

export default Recommendation