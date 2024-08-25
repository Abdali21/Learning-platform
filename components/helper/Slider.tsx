"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Slider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
        >
            <SliderCard
                image="/images/r1.jpg"
                name="Jasica doe"
                role="web devloper" 
            />
                        <SliderCard
                image="/images/r2.jpg"
                name="John doe"
                role="Next js devloper" 
            />
                        <SliderCard
                image="/images/r3.jpg"
                name="Abd ali Houmaidi"
                role="Mern devloper" 
            />
        </Carousel>
    )
}

export default Slider
