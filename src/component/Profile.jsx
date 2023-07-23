import React, { useState } from "react";
import Styles from "./HomePage.module.scss";

const Profile = () => {
  const [userFollowersList, setUserFollowersList] = useState([
    { label: "Following", value: 34 },
    { label: "Followers", value: 85 },
    { label: "Groups", value: 8 },
  ]);
  const [userProfileDetails, setUserProfileDetails] = useState({
    name: "Mr. Arthur Christopher",
    designation: "Acidaes Solutions PVT LTD",
    profilePic: "",
  });
  return (
    <div className="gap  card">
      <div className={`dflex  ${Styles.searchContext}`}>
        <div>
          <img
            className={Styles.profileSize}
            src="https://i.ibb.co/ysfXt55/user-Profile.png"
            alt="user-Profile"
            border="0"
          />
        </div>
        <div>
          <div>
            <div className={Styles.headerText}>{userProfileDetails.name}</div>
            <div className={Styles.subTextContent}>
              {userProfileDetails.designation}
            </div>
          </div>
          <div className="dflex mt-5">
            {userFollowersList.map((item, i) => (
              <div
                key={i}
                className={`${Styles.followersListbtn} margin-5 ml-0`}
              >{`${item.value} ${item.label}`}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-2 mt-5">
        <button className={`${Styles.themeButton2} bigBtn `}>Groups</button>
        <button className={`${Styles.themeButton1} ml-2 bigBtn`}>
          Manage Users
        </button>
      </div>
    </div>
  );
};

export default Profile;
