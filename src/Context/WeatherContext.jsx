import React, { createContext, useContext, useEffect, useState } from 'react'

const WeatherContext = createContext()

export const useWeather = () => useContext(WeatherContext);


export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(() => {
      const savedWeather = sessionStorage.getItem('weatherData');
      return savedWeather ? JSON.parse(savedWeather) : null;
    });


  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData}}>
        {children}
    </WeatherContext.Provider>
  );
};