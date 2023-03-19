// import React from "react";
import {
  addSignActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
 

    addPost: (newPostText) => {
      dispatch(addSignActionCreator(newPostText));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
