import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroBannner = () => {
  return (
<div className="hero-banner-container">
      <div className='hero-banner-details'>
        <p className="beats-solo">FURNITURE</p>
        <h3>Discover the Perfect Furniture</h3>
        <h1>Get Comfy</h1>

     
       <Link href="/shop"> 
            <button type="button">Start Shopping Now</button>
          </Link>
          <div className="desc">
            <h3>About Our Furniture</h3>
            <p>Transform your home with our premium selection of comfortable and stylish furniture pieces. Whether you're looking for a cozy sofa, elegant dining set, or functional storage solutions, we have it all to suit your taste and needs. Create your dream living space with our high-quality furniture collection.</p>
      
        </div>
      </div>
      <div className="hero-banner-image">
    {/* <Image
        src='/footerBanner.png'
        height={500}
        width={300}
        alt="image"/>  */}

      </div>
    </div>
  )
}

export default HeroBannner