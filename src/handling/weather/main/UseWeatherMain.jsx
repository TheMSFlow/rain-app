import React from 'react'
import useAccessoryDetails from '../useAccessoryDetails';
import { useWeather } from '../../../Context/WeatherContext';
import MainView from '../../../components/result/MainView';

const UseWeatherMain = () => {
    const { weatherData} = useWeather();
    const { selectedAccessory} = useAccessoryDetails();

      
  return (
    <div>
        {selectedAccessory &&
                <MainView 
                    text={selectedAccessory.text} 
                    title={weatherData.weather[0].description} 
                    image ={selectedAccessory.image}
                />
        }
    </div>
    
  )
}

export default UseWeatherMain;