import React from "react";
// import s from "./Profile.module.scss";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <>
      <ProfileInfo />
      <MyPost state={props.state} addPost={props.addPost}/>
    </>
  );
};

export default Profile;
