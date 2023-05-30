import Image from "next/image";
import React from "react";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>10% OFF</p>
          <h3>fine</h3>
          <h3>smile</h3>
          <p>15 aug to 7 dec</p>
        </div>
        <div className="right">
          <p>Best Solo Air</p>
          <h3>Summer Sale</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adip
          </p>
          {/* <Link href={`/product/${product}`}> */}
          <button type="button">Shop Now</button>
          {/*  </Link> */}
        </div>

        <Image
          width={500}
          height={500}
          alt="footer image"
          src="/FooterBanner.webp"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
