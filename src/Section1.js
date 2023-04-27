import React from 'react'
import illu from './images/illustration-hero.svg'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='section1'>
      <img className="illu" src={illu} alt="illustration" />
    </div>
  )
}

export default Section1