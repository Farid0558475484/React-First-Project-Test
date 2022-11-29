import React from "react";
import s from "./Post.module.scss";

function Post(props) {
  return (
    <>
    {props.message}
      <div className={s.item}>Post</div>
      {/* <div className={s.item}>Post</div> */}
    </>
  );
}

export default Post;
