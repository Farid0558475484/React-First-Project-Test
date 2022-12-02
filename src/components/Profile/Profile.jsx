import React from "react";
// import s from "./Profile.module.scss";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  console.log('====================================');
  console.log("props in profilw" ,  props);
  console.log('====================================');
  
  return (
    <>
      <ProfileInfo />
      <MyPost state={props.state}/>
    </>
  );
};

export default Profile;
