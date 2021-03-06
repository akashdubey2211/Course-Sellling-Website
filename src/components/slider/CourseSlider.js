import React ,{useState}from 'react'
import BookImg from '../../images/lm.png'
import {courses,sale} from '../../dummyData/courses';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';
import '../../scss/_course-slider.scss'
import useWindowSize from '../../customHooks/useWindowSize'

const CourseSlider = () => {
    const [courseCount,setCourseCount]=useState(0);
    const [courseSliderAnimate, setcourseSliderAnimate] = useState(
        "course-slider__courses"
      );

    const {width}=useWindowSize();
    let showCourses=3;
   if (width<=598)showCourses=2;

    let courseCopy=[...courses];
    courseCopy.push({
        title:'See More Courses',
        price:' varies',
        author:'by : ',
        img:BookImg,
        position:999999999999,
        id:999999999999
    });
    const courseChangeCount=(e,forward)=>{
        e.stopPropagation();
        forward ?
        setcourseSliderAnimate('course-slider__courses course-slider__slideout'):
        setcourseSliderAnimate('course-slider__courses course-slider__slideout-right');
        setTimeout(()=>{
            if (forward) {
                
           
            setCourseCount( courseCount + showCourses);
            setcourseSliderAnimate('course-slider__courses course-slider__slidein') }
            else {setCourseCount(courseCount - showCourses)
            setcourseSliderAnimate('course-slider__courses course-slider__slidein-right')}
        },150)
    }
    const courseList=courseCopy.map(el=>(
        <div key={el.position} className="course-slider__course">
            <img
          className="course-slider__course--img"
          src={el.img}
          alt={el.name}
        />
            <div className="course-slider__course--bottom">
            <div className="course-slider__course--bottom--title">{el.title}</div>
            <div className="course-slider__course--bottom--author">Course by: {el.author}</div>

            {el.saleOptIn && sale ? (
     <div className="course-slider__course--bottom--price">
    <span className="course-slider__course--bottom--strike">  {el.price}</span>
    Sale :??? 
{el.price * sale}
      </div>
            ):(
            <div className="course-slider__course--bottom--price"> {el.price}</div>
            )
        }
            {el.position === 999999999999 ? <div /> :
            <input className="course-slider__course--bottom--button" type='submit' value='Add To Card'/>}
            </div>

        </div>
    ));
    let activeList=[]
    showCourses === 3 ? activeList =[courseList[courseCount],courseList[courseCount +1],courseList[courseCount +2]]:
        activeList=[courseList[courseCount],courseList[courseCount +1]]
    return (
        <div className="course-slider">
            <div className="course-slider__title">
            Top Courses
            </div>
            <div className="course-slider__underlined"/>
            <div className="course-slider__container">
                {courseCount === 0 ?  <div />:
             <div className="course-slider__course-back"onClick={(e)=>courseChangeCount(e)}><FaArrowLeft /></div>}
            <div  className={courseSliderAnimate}>{activeList}</div>
            {courseCount + showCourses >= courseCopy.length ? <div />:
            <div className="course-slider__course-forward" onClick={(e)=>courseChangeCount(e,true)}><FaArrowRight /></div>}
            </div>
        </div>
    )
}

export default CourseSlider;
