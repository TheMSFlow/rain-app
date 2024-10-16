import React from 'react'
import useAccessoryDetails from '../useAccessoryDetails';
import MainView from '../../../components/global/MainView';

const UseWeatherMain = () => {
    const { selectedAccessory, weatherDescription} = useAccessoryDetails();

      
  return (
    <div>
        {selectedAccessory &&
                <MainView 
                    text={selectedAccessory.text} 
                    title={weatherDescription} 
                    image ={selectedAccessory.image}
                />
        }
    </div>
    
  )
}

export default UseWeatherMain;