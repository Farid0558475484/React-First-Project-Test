import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Ferid" id="1" />
        <DialogItem name="Ayxan" id="2" />
        <DialogItem name="Elnar" id="3" />
        <DialogItem name="Rasim" id="4" />
        <DialogItem name="Casur" id="5" />
        <DialogItem name="Vagif" id="6" />
        <DialogItem name="Nicat" id="7" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Fine" />
      </div>
    </div>
  );
}

export default Dialogs;
