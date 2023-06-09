import Image from 'next/image'
import React from 'react'

const HeroBannner = () => {
  return (
<div className="hero-banner-container">
      <div>
        <p className="beats-solo">Get Comfy</p>
        <h3>Discover the Perfect Furniture</h3>
        <h1>FURNITURE</h1>

        <div>
        {/*   <Link href={`/product/${heroBanner.product}`}> */}
            <button type="button">Start Shopping Now</button>
         {/*  </Link> */}
          <div className="desc">
            <h5>About Our Furniture</h5>
            <p>Transform your home with our premium selection of comfortable and stylish furniture pieces. Whether you're looking for a cozy sofa, elegant dining set, or functional storage solutions, we have it all to suit your taste and needs. Create your dream living space with our high-quality furniture collection.</p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
        src='/hero.jpg'
        height={500}
        width={300}
        alt="image"/>

      </div>
    </div>
  )
}

export default HeroBannner