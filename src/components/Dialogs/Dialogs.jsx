import React from "react";
import s from "./Dialogs.module.scss";

function Dialogs() {
  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
      <div className={s.dialog}>Ferid</div>
      <div className={s.dialog}>Ayxan</div>
      <div className={s.dialog}>Nurlan</div>
      <div className={s.dialog}>Elmar</div>
      <div className={s.dialog}>Sahib</div>
      <div className={s.dialog}>Nicat</div>
      <div className={s.dialog}>Ceyhun</div>
     </div>
     <div className={s.messages}>
     <div className={s.dialog}>hi</div>
      <div className={s.dialog}>how are you?</div>
      <div className={s.dialog}>fine</div>

     </div>
    </div>
  );
}

export default Dialogs;
