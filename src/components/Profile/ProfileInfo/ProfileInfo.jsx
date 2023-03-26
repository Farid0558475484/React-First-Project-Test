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

        <div className={s.descriptionBlock}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.aboutMe}>{props.profile.aboutMe}</div>
          <div className={s.lookingForAJob}>
            {props.profile.lookingForAJob ? "Looking for a job" : ""}
          </div>
          <div className={s.lookingForAJobDescription}>
            {props.profile.lookingForAJobDescription}
          </div>
        </div>

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </>
  );
};

// const ProfileData = (props) => {
//   return (
//     <div>
//       <div>
//         <b>Full name</b>: {props.profile.fullName}
//       </div>
//       <div>
//         <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
//       </div>
//       {props.profile.lookingForAJob && (
//         <div>
//           <b>My professional skills</b>:{" "}
//           {props.profile.lookingForAJobDescription}
//         </div>
//       )}
//       <div>
//         <b>About me</b>: {props.profile.aboutMe}
//       </div>
//       <div>
//         <b>Contacts</b>:{" "}
//         {Object.keys(props.profile.contacts).map((key) => {
//           return (
//             <Contact
//               key={key}
//               contactTitle={key}
//               contactValue={props.profile.contacts[key]}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Contact = ({ contactTitle, contactValue }) => {
//   return (
//     <div className={s.contact}>
//       <b>{contactTitle}</b>: {contactValue}
//     </div>
//   );
// };

export default ProfileInfo;
