import React from "react";
import { FiSettings } from "react-icons/fi";

function Notifications({toggleNotifications}) {
    const items =(
        <div className="notifications-items">

        <div className='notifications-items-content'>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSb44-B3JlNlYSu4gos9gLPrAGEvpeWeojbP32OEw=s88-c-k-c0x00ffffff-no-rj"
            alt="profile"
          />
          <div>
            <span> Recommended: ويندوز 11 و البرمجة - windows 11 and programing </span>
          </div>
        </div>

        <div className='notifications-video'>
          <img src="https://i.ytimg.com/vi/hx-TUJgropU/hqdefault.jpg" alt="video-img" />
        </div>

      </div>

    )
  return (
    <div className={toggleNotifications ?'Notifications-Component': "notifications-component"}>

      <div className='notifications-head'>
        <h5>notifications</h5>
        <FiSettings />
      </div>
      <hr/>
      {items}
      {items}
      {items}
      {items}
      {items}
      {items}
      {items}
      
    </div>
  );
}

export default Notifications;
