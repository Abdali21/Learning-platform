"use client"
import { useEffect } from "react"
import About from "./about/About"
import Article from "./article/Article"
import Courses from "./course/Courses"
import Feature from "./feature/Feature"
import Hero from "./hero/Hero"
import Review from "./review/Review"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
const initAos = async ()=>{
  await import('aos')
  AOS.init({
    duration:1000,
    easing:"ease",
    once:true,
    anchorPlacement:'top-bottom'
  })
};
initAos();
  },[])
  return (
    <div>
       <Hero />
       <About />
       <Courses />
       <Feature/>
       <Review/>
       <Article/>
    </div>
  )
}

export default Home
