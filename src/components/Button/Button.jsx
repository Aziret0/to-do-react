import React from 'react'
import './Button.css'

const Button = ({type='button', children, onClick}) => {
  return (
    <button type={type} onClick={onClick} className='btn'>
      {children}
    </button>
  )
}

export default Button