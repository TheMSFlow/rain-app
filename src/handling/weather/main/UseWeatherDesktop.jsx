import React from 'react'
import useAccessoryDetails from '../useAccessoryDetails';
import DesktopView from '../../../components/result/DesktopView';

const UseWeatherDesktop = () => {
    const { selectedAccessory, weatherDescription} = useAccessoryDetails();
      
  return (
    <div>
        {selectedAccessory &&
                <DesktopView 
                    text={selectedAccessory.text} 
                    title={weatherDescription} 
                    image ={selectedAccessory.image}
                />
        }
    </div>
    
  )
}

export default UseWeatherDesktop;