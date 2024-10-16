import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './components/general/SplashScreen';
import Onboarding from './components/general/Onboarding';
import DashBoard from './components/dashboard/Dashboard'
import SearchResult from './components/result/SearchResult'
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  //New user has no 'hasVisited' key in local storge
 const [newUser, setNewUser] = useState(() => !localStorage.getItem('hasVisited'));

 // User is registered in local storage
 const newUserBoarded = () => {
   localStorage.setItem('hasVisited', 'true');
   setNewUser(false);
 }
 //When app component mounts, if new user, display splash screen. If existing user, replace with dashboard so user can't go back to previous screens.

  return (
    <Router>
      <WeatherProvider>
      <Routes>
        {newUser ? (
          <>
          <Route path='/' element={<Splash />} />
          <Route path='/onboarding' element={<Onboarding userBoarded={newUserBoarded} />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/result' element={<SearchResult />} />
          <Route path='*' element={<Navigate to='/' />} />
          </>
        ) : (
          <>
          <Route path='/' element={<Navigate to = '/dashboard' replace />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/result' element={<SearchResult />} />
          <Route path='*' element={<Navigate to = '/dashboard' />} />
          </>
        ) }
      </Routes>
      </WeatherProvider>
    </Router>
  )
}

export default App
