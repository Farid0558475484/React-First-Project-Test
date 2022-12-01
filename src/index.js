import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";




let posts = [
  { message: "Hi,My name Farid///its props", id: 1 },
  { message: "my favorite hobbi is writing code//its props", id: 2 },
  { message: "Marketing, SEO, Veb-sayt", id: 3 },
  { message: "Flegri.az", id: 4 },

];

let dialogsData = [
  { name: "Ferid", id: 1 },
  { name: "Ayxan", id: 2 },
  { name: "Elnar", id: 3 },
  { name: "Rasim", id: 4 },
  { name: "Casur", id: 5 },
  { name: "Vagif", id: 6 },
  { name: "Nicat", id: 7 },
];

let messagesData = [
  { message: "hi", id: 1 },
  { message: "How are you?", id: 2 },
  { message: "Fine", id: 3 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);
