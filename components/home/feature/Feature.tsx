"use client"
import Image from "next/image"
import { FaBriefcase } from "react-icons/fa"
import Tilt from "react-parallax-tilt"

const Feature = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
                <Tilt>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <Image
                            src='/images/f.png'
                            alt="f"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </Tilt>
                <div>
                    <div className='flex items-center space-x-4'>
                        <div className='h-12 w-12 bg-rose-600 flex rounded-full items-center justify-center flex-col'>
                            <FaBriefcase className='h-6 w-6 text-white' />
                        </div>
                        <h1 className='text-xl font-semibold text-black'>
                            Premium learning experience
                        </h1>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 
                                   font-bold md:leading-[3rem]">
                        Providing amazing online courses.
                    </h1>
                    <div className="mt-8 mb-6">
                        <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
                            Master the skills that matter to you
                        </h1>
                        <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
                            Learn from industry experts and gain practical knowledge that will
                            help you excel in your career.
                        </p>
                    </div>
                    <div className="mt-8 mb-6">
                        <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
                            Increase your learning skills
                        </h1>
                        <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
                            Improve your learning skills with our tailored courses designed to
                            enhance your abilities and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
