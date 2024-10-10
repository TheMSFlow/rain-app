import React from 'react'
import { useWeather } from '../../Context/WeatherContext'

//2d weather icon imports
import zeroOneD from '../../assets/weather-icons/2d/01d.png';
import zeroOneN from '../../assets/weather-icons/2d/01n.png';
import zeroTwoD from '../../assets/weather-icons/2d/02d.png';
import zeroTwoN from '../../assets/weather-icons/2d/02n.png';
import zeroThreeD from '../../assets/weather-icons/2d/03d.png';
import zeroThreeN from '../../assets/weather-icons/2d/03d.png';
import zeroFourN from '../../assets/weather-icons/2d/04n.png';
import zeroNineD from '../../assets/weather-icons/2d/09d.png';
import tenD from '../../assets/weather-icons/2d/10d.png';
import tenN from '../../assets/weather-icons/2d/10n.png';
import ellevenN from '../../assets/weather-icons/2d/11n.png';
import thirteenD from '../../assets/weather-icons/2d/13d.png';
import FiftyN from '../../assets/weather-icons/2d/50n.png';

const HandleWeatherIcon = () => {
    const { weatherData} = useWeather();
    const weatherIcons = {
        '01d': zeroOneD,
        '01n': zeroOneN,
        '02d': zeroTwoD,
        '02n': zeroTwoN,
        '03d': zeroThreeD,
        '03n': zeroThreeN,
        '04d': zeroFourN,
        '04n': zeroFourN,
        '09d': zeroNineD,
        '09n': zeroNineD,
        '10d': tenD,
        '10n': tenN,
        '11d': ellevenN,
        '11n': ellevenN,
        '13d': thirteenD,
        '13n': thirteenD,
        '50d': FiftyN,
        '50n': FiftyN,
      };
    
      const weatherIconCode = weatherData?.weather[0]?.icon;
      const weatherIconSrc = weatherIcons[weatherIconCode];
  return (
    <img className='absolute xl:absolute xl:top-20 xl:-left-12 xl:translate-x-0 xl:translate-y-0 xl:ml-0 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[-120px] lg:ml-[-200px] mt-[20px]' src={weatherIconSrc} />
  )
}

export default HandleWeatherIcon