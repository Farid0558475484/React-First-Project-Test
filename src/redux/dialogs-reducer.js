const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    // { message: "hi", id: 1 },
    // { message: "How are you?", id: 2 },
    // { message: "Fine", id: 3 },
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
