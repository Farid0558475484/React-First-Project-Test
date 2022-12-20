let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi,My name Farid///its props", id: 1 },
        { message: "my favorite hobbi is writing code//its props", id: 2 },
        { message: "Marketing, SEO, Veb-sayt", id: 3 },
        { message: "Flegri.az", id: 4 },
      ],

      newPostText: "Farid",
    },

    messagePage: {
      messagesData: [
        { message: "hi", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "Fine", id: 3 },
      ],

      dialogsData: [
        { name: "Ferid", id: 1 },
        { name: "Ayxan", id: 2 },
        { name: "Elnar", id: 3 },
        { name: "Rasim", id: 4 },
        { name: "Casur", id: 5 },
        { name: "Vagif", id: 6 },
        { name: "Nicat", id: 7 },
      ],
    },
  },

  getState() {

    return this._state;
  },

  callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    debugger ;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    console.log("newText", newText);
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
