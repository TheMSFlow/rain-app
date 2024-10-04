import React, { useEffect } from 'react'
import WeatherBackground from '../global/WeatherBackground'
import { useNavigate } from 'react-router-dom'
import Onboarding from './Onboarding';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    },3000)

    return () => clearTimeout(timer);
  },[navigate]);

  return (
    <div>
    <WeatherBackground heading = {<span className='text-white'> Drip Weather </span>} />
    </div>
  )
}

export default Splash