import React from "react";
import s from "./Profile.module.scss";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MyPost />
    </>
  );
};

export default Profile;
