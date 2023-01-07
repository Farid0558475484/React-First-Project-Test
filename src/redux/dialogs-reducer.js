const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { message: "hi", id: 1 },
    { message: "How are you?", id: 2 },
    { message: "Fine", id: 3 },
  ],

  dialogs: [
    { name: "Ferid", id: 1 },
    { name: "Ayxan", id: 2 },
    { name: "Elnar", id: 3 },
    { name: "Rasim", id: 4 },
    { name: "Casur", id: 5 },
    { name: "Vagif", id: 6 },
    { name: "Nicat", id: 7 },
  ],

  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 4, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
