import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import { Navigate } from "react-router-dom";

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

function Dialogs(props) {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id++} />
  ));

  const onSendMessageClick = () => {
    if (newMessageBody === "") return;
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Send your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
