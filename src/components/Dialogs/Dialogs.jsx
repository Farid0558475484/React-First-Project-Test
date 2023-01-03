import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";

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
  // let dialogsData = [
  //   { name: "Ferid", id: 1 },
  //   { name: "Ayxan", id: 2 },
  //   { name: "Elnar", id: 3 },
  //   { name: "Rasim", id: 4 },
  //   { name: "Casur", id: 5 },
  //   { name: "Vagif", id: 6 },
  //   { name: "Nicat", id: 7 },
  // ];
  // [
  //   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
  //   <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
  //   <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
  //   <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
  //   <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
  //   <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />,
  //   <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />,
  //   <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} />,
  // ];
  // let messagesData = [
  //   { message: "hi", id: 1 },
  //   { message: "How are you?", id: 2 },
  //   { message: "Fine", id: 3 },
  // ];

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d, index) => (
    <DialogItem key={`${index}-diologs`} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m, index) => (
    <Message key={`${index}-messages`} message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  // [
  //   <Message message={messagesData[0].message} id={messagesData[0].id} />,
  //   <Message message={messagesData[1].message} id={messagesData[1].id} />,
  //   <Message message={messagesData[2].message} id={messagesData[2].id} />,
  // ];

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

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
