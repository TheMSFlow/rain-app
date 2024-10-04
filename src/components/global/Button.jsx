import React from 'react'

const Button = ({ className, icon, text }) => {
  return (
    <button className={`flex flex-row gap-2 justify-center items-center px-12 py-2 rounded-3xl text-sm xl:w-full ${className}`} type='button'> {icon && <span>{icon}</span>} {text}</button>
  )
}

export default Button