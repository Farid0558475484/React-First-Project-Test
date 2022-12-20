import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost(props) {
  let postElements = props.state.map((p, index) => (
    <Post message={p.message} key={index} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let addSign = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.mypost}>
      <textarea
        onChange={(e) => onPostChange(e)}
        ref={newPostElement}
        value={props.newPostText}
      />
      <div>
        <button onClick={addPost}>Add me</button>
        <button onClick={addSign}>Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>

      {postElements}
      {/* <Post message={postData[0].message} />
      <Post message={postData[1].message} /> */}
    </div>
  );
}

export default MyPost;
