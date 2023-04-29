const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  messages: [
    { message: "hi", id: 1 },
    { message: "How are you?", id: 2 },
    { message: "Fine", id: 3 },
  ] as Array<MessageType>,

  dialogs: [
    { name: "Ferid", id: 1 },
    { name: "Ayxan", id: 2 },
    { name: "Elnar", id: 3 },
    { name: "Rasim", id: 4 },
    { name: "Casur", id: 5 },
    { name: "Vagif", id: 6 },
    { name: "Nicat", id: 7 },
  ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
