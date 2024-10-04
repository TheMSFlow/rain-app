import React from 'react'

const StatusBar = () => {
  return (
    <>
    <div className='flex flex-col gap-0 justify-center items-start w-screen'>
        <div className='bg-accent text-xs py-[6px] px-[10px] rounded-[4px_4px_0px_0px] ml-6'>Light rain</div>
        <div className='bg-secondary text-xs px-6 py-[10px] w-full'>Choose from ponchos, shoe covers and utility belts.</div>
    </div>
    </>
  )
}

export default StatusBar