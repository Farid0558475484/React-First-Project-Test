import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    // profilePage: {
    //   posts: [
    //     { message: "Hi,My name Farid///its props", id: 1 },
    //     { message: "my favorite hobbi is writing code//its props", id: 2 },
    //     { message: "Marketing, SEO, Veb-sayt", id: 3 },
    //     { message: "Flegri.az", id: 4 },
    //   ],

    //   newPostText: "Farid",
    // },

    // dialogsPage: {
    //   messages: [
    //     { message: "hi", id: 1 },
    //     { message: "How are you?", id: 2 },
    //     { message: "Fine", id: 3 },
    //   ],

    //   dialogs: [
    //     { name: "Ferid", id: 1 },
    //     { name: "Ayxan", id: 2 },
    //     { name: "Elnar", id: 3 },
    //     { name: "Rasim", id: 4 },
    //     { name: "Casur", id: 5 },
    //     { name: "Vagif", id: 6 },
    //     { name: "Nicat", id: 7 },
    //   ],

    //   newMessageBody: "",
    // },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    this._state.profilePage =   (this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = dialogsReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};





export default store;
window.store = store;
