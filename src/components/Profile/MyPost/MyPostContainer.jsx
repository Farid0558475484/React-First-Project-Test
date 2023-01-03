import React from "react";
import {
  addSignActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

function MyPostContainer(props) {
  let addPost = () => {
    props.store.dispatch(addSignActionCreator());
  };

  // let addSign = () => {
  //   let text = newPostElement.current.value;
  //   alert(text);
  // };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.posts}
    />
  );
}

export default MyPostContainer;
