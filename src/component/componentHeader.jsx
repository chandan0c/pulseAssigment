import React from "react";

import Styles from "./HomePage.module.scss";

const ComponentHeader = () => {
  return (
    <div className="gap card">
      <div className="margin-5">
        <div className={`${Styles.headerText}`}>Link URL</div>
        <div className="mt-2">
          <input
            className="customInput "
            Link
            URLplaceholder="Enter url"
          ></input>
        </div>
      </div>

      <div className="margin-5">
        <div className={Styles.headerText}>Link Name</div>
        <div className="mt-2">
          <input
            className="customInput"
            placeholder="Enter display name"
          ></input>
        </div>
      </div>

      <div className="margin-5">
        <input
          className={Styles.descriptionBox}
          placeholder="Description"
        ></input>
      </div>

      <div className="margin-5" style={{ fontSize: "12px" }}>
        <span>
          <input type="radio"></input>
          <span className={`${Styles.headerText} ml-5`}>Visible to all</span>
        </span>

        <span className="ml-5">
          <input type="radio"></input>
          <span className={`${Styles.headerText} ml-5`}>Private</span>
        </span>
      </div>

      <div
        className="dflex justifyContentspace mt-8"
        style={{ fontSize: "12px" }}
      >
        <div>
          <span className="ml-5">
            <span className={Styles.headerAddButton}>+</span>
            <span className="ml-4">Post</span>
          </span>

          <span className="ml-5">
            <i />
            <span className="ml-4">Links</span>
          </span>

          <span className="ml-5">
            <img></img>
            <span className="ml-4">Image/File Upload</span>
          </span>

          <span className="ml-5">
            <i></i> <span className="ml-4">Task</span>
          </span>
        </div>
        <div>
          <span style={{ fontSize: "15px" }} className={Styles.themeButton1}>
            Post
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
