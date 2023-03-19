import { Field, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import { Navigate } from "react-router-dom";
import { Form } from "formik";

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
  // let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id++} />
  ));

  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  let AddNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        AddNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;
