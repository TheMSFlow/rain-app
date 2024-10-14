import React, { useEffect } from 'react'
import WeatherBackground from '../global/WeatherBackground'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    },3000)

    return () => clearTimeout(timer);
  },[navigate]);

  return (
    <div>
    <WeatherBackground 
    className={'w-screen h-screen'}
    heading = {<span className='text-white'> Rain </span>} 
    />
    </div>
  )
}

export default SplashScreen;