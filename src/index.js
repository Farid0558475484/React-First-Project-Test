import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
