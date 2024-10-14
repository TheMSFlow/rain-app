import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ backBtn, logo, shareBtn }) => {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate('/dashboard')
  }
  
  return (
    <>
    <header className='flex flex-row justify-between items-center h-12 xl:mt-4 w-full px-4 xl:px-6 relative z-50'>
        {backBtn && <button className='focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent focus-visible:outline-offset-4' onClick = {handleBackBtn}> <img src='/back-btn.svg'/> </button>}
        {logo && <p className='font-playfair text-2xl lg:text-3xl text-white m-auto'> Rain </p>}
        {shareBtn && <button className='focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent focus-visible:outline-offset-4'> <img src='/share-btn.svg'/> </button>}
    </header>
    </>
  )
}

export default Header