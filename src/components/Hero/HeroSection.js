"use client"
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import heroavatar from '../../assets/image/hero/heroavatar.svg';
import herocircle from '../../assets/image/hero/herocircle.svg';
import herostar from '../../assets/image/hero/herostar.svg';
import developer from '../../assets/image/hero/developer.png';
function HeroSection() {
  return (
    <div className='hero-section'>
      <Image src={herocircle} alt="circle" className='herocircle' />
      <Image src={herostar} alt="circle" className='herostar' />
      <Row className='hero-row'>
        <Col className='discription order-lg-1 order-2' lg="6">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -100,y:30 }}
              animate={{ opacity: 1, x: 0,y:0 }}
              transition={{ duration: 0.4,delay:0.3 }}
            >
              <h3>This is your web developer </h3><h4> Krushit Dholariya</h4>
              <p className='hero-description'>Hi, I'm a passionate React.js developer dedicated to creating interactive and user-friendly web applications.
</p>
            </motion.div>
          </AnimatePresence>
        </Col>
        <Col className='hero-avatar order-lg-2 order-1' lg="6">
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 100,y:30 }}
              animate={{ opacity: 1, x: 0 ,y:0}}
              transition={{ duration: 0.3 }}
            >
          <Image src={developer} alt="hero avatar" className='img-fluid hero-avatar' />
          </motion.div>
          </AnimatePresence>
        </Col>
        <Image src={heroavatar} alt='hero-avatar' className='hero-image img-fluid' />

      </Row>
    </div>
  )
}

export default HeroSection