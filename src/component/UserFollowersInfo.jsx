import React, { useState } from "react";
import Styles from "./HomePage.module.scss";
const UserFollowersInfo = () => {
  const [activeTab, setIsactiveTab] = useState();
  const [post, setPost] = useState([
    {
      name: "Suzen Khan",
      link: "https://i.ibb.co/ysfXt55/user-Profile.png",
      timeStamp: "13 minutes ago",
      post: "Figma is a leading design software, helping teams and individuals create designs faster and more efficiently. Figma is free and you can use it right on your web browser, on Mac and Windows.",
    },
    {
      name: "Mr. Arthur Christopher",
      link: "https://i.ibb.co/ysfXt55/user-Profile.png",
      timeStamp: "13 minutes ago",
      post: "Create up to six levels of categories and subcategories to organize and display groups of similar topics, and easily rearrange or move them with a simple drag-and-drop UI.",
    },
  ]);
  return (
    <div className={`${Styles.cardContainer} gap  card`}>
      <div className="dflex justifyContentspace">
        {/* tab 1 */}
        <div
          className={activeTab == 1 ? Styles.tabActive : Styles.cardContainer}
          style={{ width: "50%" }}
        >
          <div>
            <div onClick={() => setIsactiveTab(1)}>Favorite Links</div>
          </div>
        </div>
        <div
          className={activeTab == 2 ? Styles.tabActive : Styles.cardContainer}
          style={{ width: "50%" }}
        >
          {" "}
          <div>
            <div onClick={() => setIsactiveTab(1)}>Favorite Links</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {post.map((item, i) => {
            return (
              <div key={i}>
                <div className="dflex justifyContentspace">
                  <div className="mt-2">{item.name}</div>
                  <div className={`${Styles.timeStamp} mt-2`}>
                    {item.timeStamp}
                  </div>
                </div>
                <div className="mt-2">{item.subheader}</div>
                <div className="mt-2 subColor">{item.post}</div>
                <div className="mt-2">
                  <a href={`${item.link}`}>{`${item.link}`}</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* tab 2 */}
        {/* <div style={{width:"50%"}} className={activeTab == 2 ? Styles.tabActive : Styles.cardContainer}>
          <div>
            <div onClick={() => setIsactiveTab(2)}>Favorite Files</div>
          </div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default UserFollowersInfo;
