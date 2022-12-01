import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost() {
  let post = [
    { message: "Hi,My name Farid///its props", id: 1 },
    { message: "my favorite hobbi is writing code//its props", id: 2 },
    { message: "Marketing, SEO, Veb-sayt", id: 3 },
    { message: "Flegri.az", id: 4 },

  ];

  let postElements = post.map((p) => <Post message={p.message} />);

  return (
    <div className={s.mypost}>
      <textarea></textarea>
      <div>
        <button>Add me</button>
        <button>Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>
      
      {postElements}
      {/* <Post message={postData[0].message} />
      <Post message={postData[1].message} /> */}
    </div>
  );
}

export default MyPost;
