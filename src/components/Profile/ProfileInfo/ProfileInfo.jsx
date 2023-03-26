import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../img/user.png";

const ProfileInfo = (props, isOwner) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={s.item}>
        <img
          src={props.profile.photos.large || userPhoto}
          alt=""
          className={s.mainPhoto}
        />
        {isOwner && (
          <div>
            <input type="file" />
          </div>
        )}

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </>
  );
};

export default ProfileInfo;
