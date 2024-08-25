import Slider from "@/components/helper/Slider"
import { BsQuote } from "react-icons/bs"

const Review = () => {
    return (
        <div className="pt-20 pb-16 bg-black">
            <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
                <div className="xl:col-span-1">
                    <div>
                        <div className='flex items-center space-x-4'>
                            <div className='h-12 w-12 bg-rose-600 flex rounded-full items-center justify-center flex-col'>
                                <BsQuote className='h-6 w-6 text-white' />
                            </div>
                            <h1 className='text-xl font-semibold text-white'>Student feedback</h1>
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl
                                       mt-8 font-bold md:leading-[3rem]
                                       lg:leading-[3.3rem] xl:leading-[3.6rem] text-white">
                            Trusted by genius people.
                        </h1>
                        <p className="text-base text-white text-opacity-50 mt-6 ">
                            Our students have shared remarkable feedback, highlighting the quality of our courses.
                            They’ve found our platform transformative, helping them achieve their academic and professional goals with ease.
                        </p>
                        <div className="flex items-center space-x-10 mt-8">
                            <p className="text-white font-bold text-5xl">
                                99%
                            </p>
                            <p className="text-white">
                                Student&apos;s Complete <br />
                                Course Successfully
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 bg-white rounded-xl overflow-hidden">
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Review
