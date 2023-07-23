import React, { useState } from "react";
import Styles from "./HomePage.module.scss";
const Details = () => {
  const [userFollowersList, setUserFollowersList] = useState([
    { label: "Groups", value: 8 },
    { label: "Following", value: 34 },
    { label: "Followers", value: 85 },
  ]);
  const [searchFieldList, setSearchFieldList] = useState([
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
    {
      img: "https://i.ibb.co/ysfXt55/user-Profile.png",
      header: "Product Development Group",
      subHeader: "23 people in group",
    },
  ]);
  return (
    <div className="gap card">
      <div className={Styles.headerText}>Group & Follower Details</div>
      <div className="mt-5">
        {userFollowersList.map((item, i) => (
          <span
            className={
              item.label == "Groups"
                ? `${Styles.themeButton2} ${i > 0 ? "ml-5" : ""}`
                : `${Styles.themeButton3} ${i > 0 ? "ml-5" : ""}`
            }
            key={i}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <div className={Styles.searchContainer}>
          <input className="w-100"></input>
          <span className={`${Styles.addButton} ml-5`}>+</span>
        </div>
        <div style={{ height: "299px", display: "grid", overflow: "scroll" }}>
          {searchFieldList.map((item, i) => {
            return (
              <div key={i} className="dflex">
                <div>
                  {" "}
                  <img
                    className={Styles.smallProfileSIze}
                    src={`${item.img}`}
                    alt="user-Profile"
                    border="0"
                  />
                </div>
                <div className={`ml-5 ${Styles.searchContext} w-100`}>
                  <div className={Styles.headerText}>{item.header}</div>
                  <div className={Styles.subTextContent}>{item.subHeader}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
