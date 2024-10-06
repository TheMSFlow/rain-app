import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ backBtn, logo, shareBtn }) => {
  const navigate = useNavigate();
  return (
    <>
    <header className='flex flex-row justify-between items-center h-12 xl:mt-4 w-full px-4 xl:px-6'>
        {backBtn && <button onClick = {() => navigate('/dashboard')}> <img src='/back-btn.svg'/> </button>}
        {logo && <p className='font-playfair text-2xl lg:text-3xl text-white m-auto'> Drip Weather </p>}
        {shareBtn && <button> <img src='/share-btn.svg'/> </button>}
    </header>
    </>
  )
}

export default Header