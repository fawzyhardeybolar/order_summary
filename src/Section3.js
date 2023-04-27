import React from 'react'
import music from './images/icon-music.svg'
import './Section3.css'

const Section3 = () => {
  return (
    <div className='Section3'>
      <div className='parent-div'>
        <div className='baby'>
          <img src={music} alt="music logo" />
        </div>
        <div className='baby'>
          <h5 className='plan'>Annual Plan</h5>
          <p className='amount'>$59.99/year</p>
        </div>
        <div className='baby'>
          <a href="#" className='change'>Change</a>
        </div>
      </div>

      <button className='proceed'>Proceed to Payment</button>
      <a href="#" className='cancel'>Cancel Order</a>
    </div>
  )
}

export default Section3