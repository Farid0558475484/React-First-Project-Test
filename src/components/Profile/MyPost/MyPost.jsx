import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost(props) {



  let postElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} key={p.id++}/>
  ));
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    if(props.newPostText === "") return;
    props.addPost();
  };

  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };


  return (
    <div className={s.mypost}>
      <textarea
        placeholder="Send your "
        onChange={(e) => onPostChange(e)}
        ref={newPostElement}
        value={props.newPostText}
      />
      <div>
        <button onClick={onAddPost}>Add me</button>
        <button >Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>
      {postElements } 
    </div>
  );
}

export default MyPost;
