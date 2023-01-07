import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
  profilePage: profilReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage:usersReducer,
});
const store = createStore(reducers);

export default store;
