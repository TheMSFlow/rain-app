import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './components/general/Splash';
import Onboarding from './components/general/Onboarding';
import DashBoard from './components/dashboard/Dashboard'
import SearchResult from './components/result/SearchResult'

function App() {
 const [newUser, setNewUser] = useState(() => !localStorage.getItem('hasVisited'));

 const newUserBoarded = () => {
   localStorage.setItem('hasVisited', 'true');
   setNewUser(false);
 }

  return (
    <Router>
      <Routes>
        {newUser ? (
          <>
          <Route path='/' element={<Splash />} />
          <Route path='/onboarding' element={<Onboarding userBoarded={newUserBoarded} />} />
          <Route path='/dashboard' element={<DashBoard />} />
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
    </Router>
  )
}

export default App
