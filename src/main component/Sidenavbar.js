import {React,useState} from "react";
import { FaAngleUp,FaAngleDown } from "react-icons/fa";

import { CgPlayList } from "react-icons/cg";

//============ import img-logo =================
import youtube from "../imgs/youtube-logo-light.png";
import elzero from "../imgs/subscriptions/elzero.jpg";
import droosonline from "../imgs/subscriptions/droosonline.jpg";
import amirmounir from "../imgs/subscriptions/amir-mounir.jpg";
import codezilla from "../imgs/subscriptions/codezilla.jpg";
import kimzcods from "../imgs/subscriptions/kimzcods.jpg";
import hassounaacademy from '../imgs/subscriptions/hassouna-academy.jpg';
import uniquecoderzacademy from '../imgs/subscriptions/unique-coderz-academy.jpg';
import mohamedabusrea from '../imgs/subscriptions/mohamed-abusrea.jpg';

//============ import icons ============
import { MdVideoLibrary } from "react-icons/md";
import { FaHistory,FaYoutube,FaRegClock} from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";
import { TiThMenuOutline } from "react-icons/ti";


function Sidenavbar({toggleSideNavbar,setToggleSideNavbar}) {
  const [seeMore,setSeeMore]=useState(false)
  return (
    <div className={toggleSideNavbar ? "sidenavbar-hidden" : "sidenavbar"}>
      {/* ===========logo-img ==========*/}
      
      <div className="sidenavbar-logo">
        <TiThMenuOutline className="icons-home" onClick={()=> {setToggleSideNavbar(!toggleSideNavbar)}} />
        <img src={youtube} alt="logo" />
      </div>
      
      <hr/>

      {/* =========== section-one ==========*/}
      <div className="section-one">
        <ul>
          <li>
             <MdVideoLibrary/>
            <span>library</span>{" "}
          </li>
          <li>
             <FaHistory/>
            <span>history</span>{" "}
          </li>
          <li>
             <FaYoutube/>
            <span>your videos</span>{" "}
          </li>
          <li>
             <FaRegClock/>
            <span>watch later</span>{" "}
          </li>
          <li>
             <BiLike/>
            <span>like video</span>{" "}
          </li>
          <li  onClick={()=> setSeeMore(!seeMore)} className={seeMore?'yes' :"no"}> 
          <FaAngleDown className="icons-home"/>
          <span>show more</span>
          </li >
          <li className={seeMore?'no' :"yes"}>
            <CgPlayList/>
             <span>react js</span>
           </li>
           <li className={seeMore?'no' :"yes"}>
            <CgPlayList/>
             <span>javascript </span>
           </li> <li className={seeMore?'no' :"yes"}>
            <CgPlayList/>
             <span>تعلم api testing </span>
           </li> <li className={seeMore?'no' :"yes"}>
            <CgPlayList/>
             <span>learn redux toolkit</span>
           </li>

          <li onClick={()=> setSeeMore(!seeMore)} className={seeMore?'no' :"yes"}>
          <FaAngleUp className="icons-home" />
            <span >show less </span> </li>
        </ul>
      </div>
 

      {/* =========== section-tow ==========*/}
      <div className="subscriptions">
        <h5>SUBSCRIPTIONS</h5>
        <ul>
          <li>
             <img src={elzero} alt="" />
            <span>Elzero Web School </span> 
          </li>
          <li>
             <img src={droosonline} alt="" />

            <span>دروس أونلاين </span> 
          </li>
          <li>
             <img src={amirmounir} alt="" />

            <span>Amir Mounir</span> 
          </li>
          <li>
             <img src={codezilla} alt="" />

            <span>Codezilla</span> 
          </li>
       
          <li>
             <img src={hassounaacademy} alt="" />

            <span>Hassouna Academy </span> 
          </li>
          <li className='long'>
             <img src={uniquecoderzacademy} alt="" />

            <span>Unique Coderz Academy</span> 
          </li>
          <li>
             <img src={mohamedabusrea} alt="" />

            <span>محمد أبوسريع</span> 
          </li>

          <li>
             <img src={kimzcods} alt="" />

            <span>kimz codes</span> 
          </li>
        </ul>
      </div>
 

       {/* =========== section-three ==========*/}
       <div className="more-form-youtube">
       <h5>MORE FROM YOUTUBE</h5>

        <ul>
          <li>
             <FaYoutube/>
            <span>youtube premium</span> 
          </li>
          <li>
             <IoGameController/>
            <span>gaming</span>
          </li>
          <li>
             <GiDeliveryDrone/>
            <span>live</span> 
          </li>
         
        </ul>
      </div>

    </div>
  );
}

export default Sidenavbar;
