const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  users: [
    {  id: 1 ,fullName: "Ferid", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
    {  id: 2 ,fullName: "Osman", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
    {  id: 3 ,fullName: "Ayxan", status: "I am a boss", location: { city: "Paris", country: "France" } },
    {  id: 4 ,fullName: "Elnar", status: "I am a boss", location: { city: "Kiev", country: "Ukraine" } },
    {  id: 5 ,fullName: "Rasim", status: "I am a boss", location: { city: "Rim", country: "Italy" } },
 
  ],



  newMessageBody: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default usersReducer;
