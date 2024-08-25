"use client"
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
const HeroImage = () => {
  return (
    <Tilt>
      <div
        className='hidden lg:block'
        data-aos="fade-up" data-aos-delay="1050"
      >
        <Image src='/images/hero.png' alt='heroImage' width={800} height={600} />
      </div>
    </Tilt>
  )
}

export default HeroImage
