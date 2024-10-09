import React from 'react'
import WeatherBackground from '../global/WeatherBackground'
import Button from '../global/Button'
import { useNavigate } from 'react-router-dom'


const Onboarding = ({userBoarded}) => {
    const navigate = useNavigate()

    const finishOnboarding = () => {
      userBoarded();
      navigate('/dashboard');
    }

  return (
    <>
    <WeatherBackground 
    icons = {
        <div className='flex flex-row gap-2'>
            <img className='w-10 h-10 lg:w-20 lg:h-20' src='/sun.png'/>
            <img className='w-10 h-10 lg:w-20 lg:h-20' src='/rain.png'/>
            <img className='w-10 h-10 lg:w-20 lg:h-20' src='/wind.png'/>
            <img className='w-10 h-10 lg:w-20 lg:h-20' src='/snow.png'/>
        </div>}
    heading = {<span className='text-secondary text-5xl lg:text-8xl'>What's up?</span>} 
    subheading = {<p className='text-white text-center max-w-[45ch] text-base lg:text-lg'>Rain suggests clothing accessories based on your destination's weather.</p>}
    button = {<Button onClick = {finishOnboarding} className='text-primary-dark bg-secondary' text='Get started' />}
    />
    </>
  )
}

export default Onboarding