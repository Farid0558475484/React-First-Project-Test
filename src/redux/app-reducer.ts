import { InferActionsTypes } from "./redux-store";
import { getAuthUserData } from "./auth-reducer";

let initialState = {
  initialized: false as boolean,
};

export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "social-network/app/INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({ type: "social-network/app/INITIALIZED_SUCCESS" } as const),
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
