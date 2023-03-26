import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../img/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={s.item}>
        <img
          src={props.profile.photos.large || userPhoto}
          alt=""
          className={s.mainPhoto}
        />
        {props.isOwner && (
          <div>
            <input type="file" onChange={onMainPhotoSelected} />
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
