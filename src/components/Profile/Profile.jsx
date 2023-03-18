import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <>
      <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostContainer />
    </>
  );
};

export default Profile;
