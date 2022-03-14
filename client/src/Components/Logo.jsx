import React from 'react'
import logo from '../Images/logos/monopoly_logo.png'

export default function Logo() {
  return (
    <div className='logo'>
      <span>
        <div className='w-full h-full overflow-hidden mt-0 m-auto outline-none'>

          <img src={logo} alt='logo' className='transform translate-x-0 translate-y-0'></img>
        </div>

      </span>
      <p className='uppercase text-base text-proba-100 tracking-wide'>Bropoly</p>
    </div>
  )
}
