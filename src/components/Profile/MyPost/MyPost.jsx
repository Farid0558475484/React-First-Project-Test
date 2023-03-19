import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";

function MyPost(props) {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} key={p.id++} />
  ));

  let onAddPost = (values) => {
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

export default MyPost;
