import Image from 'next/image'
import React from 'react'

import aboutMe from '../../assets/image/aboutme/aboutMe.svg'

function AboutMe() {
  return (
    <div className='about-me'>
        <p className='about-title'>ABOUT ME</p>
        <h5 className='sub-title'>My <span>work process</span></h5>
        <Image src={aboutMe} alt="about me" className='img-fluid about-me-img'/>
    </div>
  )
}

export default AboutMe 