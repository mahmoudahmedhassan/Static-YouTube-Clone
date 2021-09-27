import {React,useState,useEffect} from 'react'
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import { FaSignOutAlt, FaCaretDown} from "react-icons/fa";
import { BiMoon } from "react-icons/bi";

import profile from "../imgs/profile.jpg";


function TogglePro({toggleProfile}) {
  const [state, setState] = useState(false);

  const handelMode = () => {
    setState(!state);
   };

  useEffect(() => {
    if (state) {
      document.documentElement.style.setProperty("--dark-black","#202020");

      document.documentElement.style.setProperty("--white", "#fff");

      document.documentElement.style.setProperty("--very-dark-black","#181818");
    }
    
    else {
      document.documentElement.style.setProperty("--dark-black","#fff");

      document.documentElement.style.setProperty("--white", "rgb(103, 103, 103)");
      
      document.documentElement.style.setProperty("--very-dark-black","#EBEBEB");
    
   
    }
  }, [state]);

    return (
        <div className={toggleProfile ? 'Toggle-Profile' :"toggle-profile"}>
        
        <div className='my-channel'>
          <img src={profile} alt="profile"  height='50px' width='50'/>
          <div>
            <p>my channel</p>
            <p>mahmoud ahmed</p>
          </div>
        </div>

        <div className='dark-mode' onClick={handelMode}>
          <p>{state ? 'light mode': 'dark mode'}</p>
          {state ? (<BsFillBrightnessHighFill/>):(<BiMoon/>)}
         </div>

        <div className='youtube-studio'>
          <p>youtube studio</p>
          <FaCaretDown />
        </div>

        <div className='setting'>
          <p>setting</p>
          <FiSettings />
        </div>

        <div className='help'>
          <p>help</p>
          <GiHelp />
        </div>
        <div className='lonout'>
          <p>logout</p>
          <FaSignOutAlt/>
        </div>
      </div>

    )
}

export default TogglePro
