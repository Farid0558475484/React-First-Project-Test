import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};
export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>;

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

const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND-MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };

    default:
      return state;
  }
};

export const actions = {
  sendMessageCreator: (newMessageBody: string) =>
    ({ type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody } as const),
};

export default dialogsReducer;
