import React from 'react'

const SearchBar = ({ errorMessage }) => {
  return (
    <>
        <div className='bg-white flex flex-row gap-2 items-center justify-start rounded-3xl py-2 pl-4 w-full'>
        <img src='/search.svg' />
        <input className='placeholder-primary text-primary-dark bg-transparent outline-none text-sm' type='text' name='search' placeholder='Search for a city or local ' />
        <span className='text-accent'>{errorMessage}</span>
        </div>
    </>
  )
}

export default SearchBar