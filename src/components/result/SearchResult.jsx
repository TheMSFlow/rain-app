import React from 'react'
import UseWeatherMain from '../../handling/weather/main/UseWeatherMain'
import UseWeatherDesktop from '../../handling/weather/main/UseWeatherDesktop'




const SearchResult = () => {

  return (
    <>
     <div className='block xl:grid xl:grid-cols-[340px_1fr] grid-rows-1 gap-0 w-full min-h-screen bg-charcoal'>
      {/* Rendered by MobileTabletView, display block on mobile and tablet. On desktop it forms the first part of the grid */}
       <UseWeatherMain />
       {/* Rendered by DesktopView, hidden on mobile and tablet. On desktop it forms the second part of the grid */}
         <UseWeatherDesktop />
    </div>
    </>
  )
}

export default SearchResult