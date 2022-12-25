import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
  profilePage: profilReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});
const store = createStore(reducers);

export default store;
