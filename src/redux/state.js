import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let store = {
  _state: {
    sidebar: {},
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    this._state.profilePage =   profilReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.usersPage = usersReducer(this._state.usersPage, action);
    this._callSubscriber(this._state);
    this._state.auth= authReducer(this._state.auth, action);



  },
};






export default store;
window.store = store;
