import s from "./MyPost.module.scss";
import Post from "./Post/Post";
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";

type PropsType = {
  posts: any;
  addPost: (newMessageBody: string) => void;
};

const MyPost: React.FC<PropsType> = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id++} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values:any) => {
    props.addPost(values.newMessageBody);
  };

  return (
    <div className={s.mypost}>
      <h3>My post</h3>
      <AddMessageForm sendMessage={onAddPost} />
      {postElements}
    </div>
  );
};

export const validateTextarea = (value: string) => {
  const errors = [];
  const maxLength = maxLengthCreator(15);

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
              as="textarea"
              placeholder={"enter text"}
              validate={(value: string) => {
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

const MyPostMemrized = React.memo(MyPost);
export default MyPostMemrized;
