import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  profilePage: profilReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
