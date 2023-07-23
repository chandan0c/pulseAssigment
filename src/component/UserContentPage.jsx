import React, { useState } from "react";
import Styles from "./HomePage.module.scss";
const UserContentPage = () => {
  const [post, setPost] = useState([
    {
      name: "Suzen Khan",
      profilePic: "https://i.ibb.co/ysfXt55/user-Profile.png",
      timeStamp: "13 minutes ago",
      post: "Figma is a leading design software, helping teams and individuals create designs faster and more efficiently. Figma is free and you can use it right on your web browser, on Mac and Windows.",
    },
    {
      name: "Mr. Arthur Christopher",
      profilePic: "https://i.ibb.co/ysfXt55/user-Profile.png",
      timeStamp: "13 minutes ago",
      post: "Create up to six levels of categories and subcategories to organize and display groups of similar topics, and easily rearrange or move them with a simple drag-and-drop UI.",
    },
  ]);
  return (
    <div className="gap card">
      <div className={`dflex justifyContentspace ${Styles.contentHeader}`}>
        <span className={`${Styles.headerText}`}>My Streams</span>
        <span>filter</span>
      </div>

      {post.map((item, i) => (
        <div key={i} className={`dflex ${Styles.contentHeader}`}>
          <div>
            <img
              className={Styles.smallProfileSIze}
              src="https://i.ibb.co/ysfXt55/user-Profile.png"
              border="0"
              alt="user-Profile"
            ></img>
          </div>
          {/* post content */}
          <div>
            <div>
              <span className={`${Styles.headerText} mt-2`}>{item.name}</span>
              <br></br>
              <span className={`${Styles.subTextContent} mt-2`}>
                {item.timeStamp}
              </span>
            </div>

            <div
              className={`${Styles.longText} mt-2`}
              style={{ color: "#333333" }}
            >
              {item.post}
            </div>
            <div className="dflex justifyContentspace mt-5">
              <div>
                <span>
                  <span style={{ color: "red" }}></span>like
                </span>{" "}
                <span className="ml-5"> comment</span>{" "}
                <span className="ml-5">Share</span>
              </div>
              <div>
                <span>thumbs</span>
                <span className="ml-5"> chat</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserContentPage;
