import React from "react";
import {
  addSignActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

function MyPostContainer(props) {

  let state = props.store.getState().profilePage;



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
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostContainer;
