import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DT55aGFaP_7owxeyf_1H4r9rnm9Zae1Dpg&usqp=CAU"
        alt="logo"
      /> */}
      <div className={s.item}>
        <img src={props.profile.photos.large} alt="User-img" />
        User-img
      </div>


    </>
  );
};

export default ProfileInfo;
