import React from "react";
import s from "./Profile.module.scss";
import MyPost from "./MyPost/MyPost";

const Profile = () => {
  return (
    <>
    <div className={s.content}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DT55aGFaP_7owxeyf_1H4r9rnm9Zae1Dpg&usqp=CAU" alt="logo" />
      <div className={s.item}>Salam</div>
      <MyPost />
      </div>
      
      </>
      
    
  );
};

export default Profile;
