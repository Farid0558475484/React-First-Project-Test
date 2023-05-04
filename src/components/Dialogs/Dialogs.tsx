import s from "./Dialogs.module.scss";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { FC } from "react";
import { InitialStateType } from "../../redux/dialogs-reducer";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};

export type NewMessageFormValuesType = {
  newMessageBody: string;
};

const Dialogs: FC<PropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id++} />
  ));

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} sendMessage={props.sendMessage} />

      </div>
    </div>
  );
};

export default Dialogs;
