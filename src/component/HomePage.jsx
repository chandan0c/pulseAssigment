import React from "react";
import Styles from "./HomePage.module.scss";
import Profile from "./Profile";
import Details from "./Details";
import UserFollowersInfo from "./UserFollowersInfo";
import ComponentHeader from "./componentHeader";
import UserContentPage from "./UserContentPage";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="HomeContainer homePageColor">
      <div className="leftMenu">
        <Profile />
        <Details />
        <UserFollowersInfo />
      </div>

      <div className="rightMenu w-100">
        <ComponentHeader />
        <UserContentPage />
      </div>
    </div>
  );
};

export default HomePage;
