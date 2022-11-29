import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost() {
  return (
    <>
      <textarea></textarea>
      <div>
        <button>Add me</button>
        <button>Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>

      <Post message="Hi,My name Farid///its props" />
      <Post message="my favorite hobbi is writing code//its props"/>
    </>
  );
}

export default MyPost;
