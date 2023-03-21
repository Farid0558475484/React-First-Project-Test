import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

function MyPost(props) {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} key={p.id++} />
  ));

  let onAddPost = (values) => {
    // if (values.newMessageBody === "") return;
    props.addPost(values.newMessageBody);
  };

  return (
    <div className={s.mypost}>
      <h3>My post</h3>
      <AddMessageForm sendMessage={onAddPost} />
      {postElements}
    </div>
  );
}

export const validateTextarea = (value) => {
  const errors = [];
  const maxLength = maxLengthCreator(5);

  if (required(value)) {
    errors.push("Field is required");
  }
  if (maxLength(value)) {
    errors.push(`Max length is ${maxLength}`);
  }

  return errors;
};

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
        AddNewMessage(values);
        resetForm({ newMessageBody: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
            
              name={"newMessageBody"}
              as={Textarea}
              placeholder={"enter text"}
              validate={(value) => {
                const errors = validateTextarea(value);
                return errors.length ? errors : undefined;
              }}


            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyPost;
