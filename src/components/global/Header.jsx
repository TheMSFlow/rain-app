import React from 'react'

const Header = ({ backBtn, logo, shareBtn }) => {
  return (
    <>
    <header className='flex flex-row justify-between items-center h-12 mt-4 w-full px-4 lg:px-6'>
        {backBtn && <button> <img src='/back-btn.svg'/> </button>}
        {logo && <p className='font-playfair text-2xl lg:text-3xl text-white m-auto'> Drip Weather </p>}
        {shareBtn && <button> <img src='/share-btn.svg'/> </button>}
    </header>
    </>
  )
}

export default Header