const SET_LOGIN = "SET_LOGIN";

const initialState = {
  login: null,
};

const loginReducer = (state = initialState, action) => {
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

export const setLogin = (login) => ({ type: SET_LOGIN, login });

export default loginReducer;
