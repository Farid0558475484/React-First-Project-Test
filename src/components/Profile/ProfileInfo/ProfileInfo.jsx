import React from "react";
import s from "./ProfileInfo.module.scss";
// import Preloader from "../../common/Preloader/Preloader";


function ProfileInfo(props) {
  // if (!props.profile) {
  //   return <Preloader/>;
  // }
  return (

    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DT55aGFaP_7owxeyf_1H4r9rnm9Zae1Dpg&usqp=CAU"
        alt="logo"
      />
      <div className={s.item}>
        {/* <img src={props.profile.photos.large}  /> */}
        Salam
      </div>
    </>
  );
}

export default ProfileInfo;
