import React from 'react'
import useAccessoryDetails from '../useAccessoryDetails';
import DesktopView from '../../../components/result/DesktopView';
import { useWeather } from '../../../Context/WeatherContext';

const UseWeatherDesktop = () => {
    const { weatherData} = useWeather();
    const { selectedAccessory} = useAccessoryDetails();
      
  return (
    <div>
        {selectedAccessory &&
                <DesktopView 
                    text={selectedAccessory.text} 
                    title={weatherData.weather[0].description} 
                    image ={selectedAccessory.image}
                />
        }
    </div>
    
  )
}

export default UseWeatherDesktop;