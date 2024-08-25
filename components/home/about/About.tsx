import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <div className='flex items-center space-x-4'>
                        <div className='h-12 w-12 bg-rose-600 flex rounded-full items-center justify-center flex-col'>
                            <FaAward className='h-6 w-6 text-white' />
                        </div>
                        <h1 className='text-xl font-semibold text-black'>Guaranteed and certified</h1>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold
                                   md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem]
                                 text-gray-800'>
                        Learn Anytime, Anywhere
                    </h1>
                    <p className='mt-4 text-gray-600'>
                        Experience top-quality education with
                        flexible learning schedules tailored to your needs.
                    </p>
                    <button className='flex items-center space-x-2 px-8 py-3 mt-8 
                                     hover:bg-gray-700 transition-all duration-200
                                       rounded-3xl bg-black text-white'>
                        <span>Learn More</span>
                        <FaArrowRight />
                    </button>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="150"
                >
                    <div>
                        <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                            01
                        </h1>
                        <div className='-mt-10'>
                            <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                                Flexibility in Learning
                            </h1>
                            <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                                Choose when and where you want to study with our highly adaptable learning programs.
                            </p>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                            02
                        </h1>
                        <div className='-mt-10'>
                            <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                                Affordable Options
                            </h1>
                            <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                                Access high-quality education that fits within your budget, without compromising on value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
