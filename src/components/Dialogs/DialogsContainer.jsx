import React from "react";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        const onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs
            updateNewMessageBodyCreator={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
