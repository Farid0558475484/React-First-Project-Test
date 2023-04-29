const SET_LOGIN = "SET_LOGIN";

const initialState = {
  login: null,
};

type InitialStateType = typeof initialState;
const loginReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    default:
      return state;
  }
};

type SetLoginType = {
  type: typeof SET_LOGIN;
  login: string;
};
export const setLogin = (login: string): SetLoginType => ({
  type: SET_LOGIN,
  login,
});

export default loginReducer;
