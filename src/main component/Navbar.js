import { React, useState } from "react";
// import bootstrab library
import "bootstrap/dist/css/bootstrap.min.css";
import { Container  } from "react-bootstrap";
// import icons
import { TiThMenuOutline } from "react-icons/ti";
import { ImHome } from "react-icons/im";
import { FaFire, FaVideo,FaAngleUp, FaAngleDown } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

// imort others component
import TogglePro from "./TogglePro";
import profile from "../imgs/profile.jpg";
import Notifications from "./Notifications";
import Sidenavbar from './Sidenavbar';
 
function Navbar() {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [toggleSearch,setToggleSearch] = useState(false);
  const [toggleSideNavbar,setToggleSideNavbar] = useState(false);
 
  return (
    <div className="Navbar">
      <Container fluid>
        <div className="navbar-content">

          <div className= {toggleSearch ?"nav-list-home-hideen" :"nav-list-home" }>
            <div>
              <a href="#">
                {" "}
                <TiThMenuOutline className="icons-home" onClick={()=> {setToggleSideNavbar(!toggleSideNavbar)}} />
              </a>
            </div>
            <div className="active">
              <a href="#">
                {" "}
                <ImHome className="icons-home active-icons" />
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <FaFire className="icons-home" />
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <MdLocalMovies className="icons-home" />
              </a>
            </div>
          </div>

          <div className="nav-list-search">
            <input type="text" placeholder="search..."/>
          </div>

          <div className="nav-list-search-responsive">
            <BiSearch className="icons-home"  onClick={()=> setToggleSearch(!toggleSearch)}/>
            <input type="text" placeholder="search..." className={toggleSearch ?"search-responsive-visble"  :"search-responsive-hidden" } />
          </div>

          <div className={toggleSearch ? "nav-list-profile-hidden" :"nav-list-profile" } >
            <div className="video">
              <a href="#">
                {" "}
                <FaVideo className="icons-home" />{" "}
              </a>
            </div>

            <div
              className="notifications"
              onClick={() => {
                setToggleNotifications(!toggleNotifications);
              }}
            >
              <div className="notifications-notifications">
                <a href="#">
                  <IoNotifications className="icons-home" />{" "}
                </a>
              </div>
            </div>

            <div className="profile">
              <div className="profile-img">
                <img src={profile} alt="profile" />
              </div>
              <div 
                onClick={() => {
                  setToggleProfile(!toggleProfile);
                }}
                style={{  cursor: 'pointer'}}
              >
                {toggleProfile ? (
                  <FaAngleUp className="icons-home" />
                ) : (
                  <FaAngleDown className="icons-home" />
                )}
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* component profile and setting */}
      <TogglePro toggleProfile={toggleProfile} />

      {/* notifications-component  */}

      <Notifications toggleNotifications={toggleNotifications} />
      <Sidenavbar toggleSideNavbar={toggleSideNavbar} setToggleSideNavbar={setToggleSideNavbar}/>
     </div>
  );
}

export default Navbar;

 