import React from 'react'

//Shows more information on the accessory recommended. Also carries weather info.
const StatusBar = ({ text, title }) => {
  return (
    <>
      <div className='flex flex-col gap-0 justify-center items-start w-screen'>
        <div className='bg-accent text-xs py-[6px] px-[10px] rounded-[4px_4px_0px_0px] ml-6'>
          {title || "No weather info"}
        </div>
          <p className='bg-secondary text-xs px-6 py-[10px] w-full'>{text || "No accessory recommendation."}</p>
    </div>
    </>
  )
}

export default StatusBar