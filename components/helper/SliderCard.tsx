import Image from "next/image"
import { FaStar } from "react-icons/fa"

type Props = {
  name: string,
  image: string,
  role: string
}

const SliderCard = ({ name, image, role }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="h-full w-full">
        <Image src={image} alt="image" width={350} height={350} className="w-full h-full" />
      </div>
      <div className="mt-6 mb-7">
        <div className="flex items-center">
          <FaStar className="xl:w-7 xl:h-7 md:w-6 md:h-6 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-6 md:h-6 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-6 md:h-6 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-6 md:h-6 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-6 md:h-6 w-4 h-4 text-yellow-600" />
        </div>
        <p className="mt-6 text-gray-600 w-[95%] 
                      md:w-[80%] text-xs md:text-sm
                      lg:text-base font-semibold
                      text-opacity-65">
          This learning platform has completely transformed the way I approach programming.
          The content is engaging, the lessons are well-structured, and the hands-on projects have helped me build real-world skills.
        </p>
        <div className="mt-7">
          <h1 className="text-xl text-black font-semibold">{name}</h1>
          <p className="text-lg text-black opacity-65">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default SliderCard
