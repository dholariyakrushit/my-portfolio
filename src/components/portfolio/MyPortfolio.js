import Link from 'next/link'
import React from 'react'

function MyPortfolio() {
  return (
    <div className='my-portfolio'>
    <p className='portfolio-title'>ABOUT ME</p>
    <h5 className='sub-title'>My <span>work process</span></h5>
    <div className='portfolio-section'>
     <Link className='view-all-btn btn btn-primary' href="/my-portfolio">View all Projects</Link>
    </div>
</div>
  )
}

export default MyPortfolio