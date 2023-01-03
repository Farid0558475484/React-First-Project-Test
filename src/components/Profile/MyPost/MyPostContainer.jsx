import React from "react";
import {
  addSignActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPost from "./MyPost";

function MyPostContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addSignActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostContainer;
