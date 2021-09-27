import {React,useState} from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import './Slider.css'
function Slider() {
    const [current,setCurrent] =useState(0);
    const length = SliderData.length;

    const next = ()=>{
        setCurrent( current=== length-1 ? 0: current+1);
    }
    const prev = ()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }
    console.log(current)
    
  const slider = SliderData.map((el, index) => (
    <div className={current === index ? "images active" : "images"} key={index}> 
      <img src={el.image} alt="" />
    </div>
  ));
  return (
    <div>
      <div className="slider">
           <FaArrowCircleRight className="next" onClick={next}/>
          <FaArrowCircleLeft className="prev" onClick={prev} />
         {slider}
      </div>
    </div>
  );
}

export default Slider;
