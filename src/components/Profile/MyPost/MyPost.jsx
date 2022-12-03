import { logDOM } from "@testing-library/react";
import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost(props) {
  // let posts = [
  //   { message: "Hi,My name Farid///its props", id: 1 },
  //   { message: "my favorite hobbi is writing code//its props", id: 2 },
  //   { message: "Marketing, SEO, Veb-sayt", id: 3 },
  //   { message: "Flegri.az", id: 4 },

  // ];


  let postElements = props.state.map( p => <Post  message={p.message} />);
  let newPostElement = React.createRef();

  const addPost = () => {
    
    let text = newPostElement.current.value;
    props.addPost(text);
  }

    const addSign = () => {
      let text =newPostElement.current.value
      alert(text);
    }

  return (
    <div className={s.mypost}>
      <textarea ref={newPostElement}></textarea>
      <div>
        <button  onClick={addPost}>Add me</button>
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
