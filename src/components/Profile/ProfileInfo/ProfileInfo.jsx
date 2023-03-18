import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus.jsx";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={s.item}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status="  ..jcvkc" />
      </div>
    </>
  );
};

export default ProfileInfo;
