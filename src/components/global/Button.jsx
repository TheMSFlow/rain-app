import React from 'react'

const Button = ({ className, icon, text, onClick }) => {
  return (
    <button onClick={onClick} className={`flex flex-row gap-2 justify-center items-center px-12 py-2 rounded-3xl text-sm xl:w-full ${className} focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent focus-visible:outline-offset-4 transition-all ease-in-out duration-300`} type='button'> {icon && <span>{icon}</span>} {text}</button>
  )
}

export default Button