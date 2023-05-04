import {
  Action,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  profilePage: profilReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action ,R=Promise<void> > = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
