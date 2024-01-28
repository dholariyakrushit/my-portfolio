import React from 'react'
import { Row, Col } from 'reactstrap'
import Image from 'next/image'

import heroavatar from '../../assets/image/hero/heroavatar.svg'
import herocircle from '../../assets/image/hero/herocircle.svg'
import herostar from '../../assets/image/hero/herostar.svg'
function HeroSection() {
  return (
    <div className='hero-section'>
      <Image src={herocircle} alt="circle" className='herocircle'/>
      <Image src={herostar} alt="circle" className='herostar'/>
        <Row className='hero-row'>
            <Col className='discription' lg="6">
              <h3>This is your web developer </h3><h4> Krushit Dholariya</h4>
              <p className='hero-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </Col>
            {/* <div className='hero-avatar'></div> */}
              <Image src={heroavatar} alt='hero-avatar' className='hero-image img-fluid'/>
            
        </Row>
    </div>
  )
}

export default HeroSection