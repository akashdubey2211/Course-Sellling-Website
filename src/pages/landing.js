import React,{frameElement} from 'react'
import CtaTop from "../components/ctaTop/Top"
// import Header from '../components/header/Header'
import CourseSlider from '../components/slider/CourseSlider'


const Landing = () => {
    return (
        <frameElement>
           
           <CtaTop />
           <CourseSlider />
        </frameElement>
      
    )
}

export default Landing;
