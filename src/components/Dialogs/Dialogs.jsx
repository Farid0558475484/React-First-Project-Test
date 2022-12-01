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


  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));


  let messagesElements = props.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  // [
  //   <Message message={messagesData[0].message} id={messagesData[0].id} />,
  //   <Message message={messagesData[1].message} id={messagesData[1].id} />,
  //   <Message message={messagesData[2].message} id={messagesData[2].id} />,
  // ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>


        {dialogsElements}

        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} /> */}
      </div>
      <div className={s.messages}>

        {messagesElements}

        {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} /> */}
      </div>
    </div>
  );
}

export default Dialogs;
