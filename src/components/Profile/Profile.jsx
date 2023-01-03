import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPostContainer store={props.store}/>
    </>
  );
};

export default Profile;
