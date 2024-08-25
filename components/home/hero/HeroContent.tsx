const HeroContent = () => {
    return (
        <div>
            <h1 data-aos="fade-right" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold
                           md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                Unlock Your Programming Potential
            </h1>
            <p data-aos="fade-left" data-aos-delay="150" className="mt-6 text-sm md:text-base text-white text-opacity-60">
                Master programming with our courses, projects,
                and expert guidance. Whether you're a beginner or advancing your skills,
                our platform has everything you need to succeed in tech
            </p>
            <div className="mt-5 flex items-center space-x-4">
                <button data-aos="zoom-in" data-aos-delay="400"
                    className="button__cls bg-green-600 hover:bg-green-900">
                    Learn More
                </button>
                <button data-aos="zoom-in" data-aos-delay="300"
                    className="button__cls bg-yellow-600 hover:bg-yellow-900">
                    Get Started
                </button>
            </div>
            <div className="flex items-center flex-wrap space-x-16 mt-8">
                <div data-aos="fade-up" data-aos-delay="600">
                    <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                        260+
                    </p>
                    <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-xl"></p>
                    <p className="md:text-lg text-sm text-white text-opacity-70">
                        Tutors
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="750">
                    <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                        2260+
                    </p>
                    <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-xl"></p>
                    <p className="md:text-lg text-sm text-white text-opacity-70">
                        Students
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                    <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                        60+
                    </p>
                    <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-xl"></p>
                    <p className="md:text-lg text-sm text-white text-opacity-70">
                        Courses
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroContent
