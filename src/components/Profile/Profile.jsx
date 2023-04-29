import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostContainer />
    </>
  );
};

export default Profile;
