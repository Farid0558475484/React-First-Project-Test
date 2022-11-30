import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost() {
  let postData = [
    { message: "Hi,My name Farid///its props", id: 1 },
    { message: "my favorite hobbi is writing code//its props", id: 2 },
  ];
  
  return (
    <div className={s.mypost}>
      <textarea></textarea>
      <div>
        <button>Add me</button>
        <button>Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>

      <Post message={postData[0].message} />
      <Post message={postData[1].message} />
    </div>
  );
}

export default MyPost;
