import React from "react";
import "./ProfileCards.css"

const ProfileCards = ({ image, title, descriptions }) => {
  return (
    <>
      <div className="main-div">
        <div className="image">{image}</div>
        <div className="subMain-div">
           <div className="title">{title}</div>
          <div className="descriptions">{descriptions}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileCards;
